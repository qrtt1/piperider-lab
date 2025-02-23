import { Switch, Route, Router, BaseLocationHook } from 'wouter';
import { Loading } from '../components';
import { MasterDetailContainer } from '../components/Common/MasterDetailContainer';

import { NotFound } from '../components/Common/NotFound';
import { useHashLocation } from '../hooks/useHashLcocation';
import { ComparisonReportSchema } from '../types';
import { useReportStore } from '../utils';
import {
  ASSERTIONS_ROUTE_PATH,
  METRICS_ROUTE_PATH,
  COLUMN_DETAILS_ROUTE_PATH,
  HOME_ROUTE_PATH,
  SSR_ROUTE_PATH,
  TABLE_DETAILS_ROUTE_PATH,
  TABLE_LIST_ROUTE_PATH,
  SOURCE_DETAILS_ROUTE_PATH,
  SOURCE_COLUMN_DETAILS_ROUTE_PATH,
  SEED_DETAILS_ROUTE_PATH,
  SEED_COLUMN_DETAILS_ROUTE_PATH,
  MODEL_DETAILS_ROUTE_PATH,
  MODEL_COLUMN_DETAILS_ROUTE_PATH,
  METRIC_DETAILS_ROUTE_PATH,
} from '../utils/routes';
import { CRAssertionListPage } from './CRAssertionListPage';
import { CRBMPage } from './CRBMPage';
import CRColumnDetailPage from './CRColumnDetailPage';
import { CROverviewPage } from './CROverviewPage';
import CRTableDetailPage from './CRTableDetailPage';
import { CRTablesListPage } from './CRTableListPage';

interface Props {
  data: ComparisonReportSchema;
  cloud?: boolean;
  sideNavTop?: string;
}

export function CRPage({ data, cloud, sideNavTop = '0px' }: Props) {
  const setReportData = useReportStore((s) => s.setReportRawData);
  setReportData(data);

  return (
    <Router hook={useHashLocation as BaseLocationHook}>
      <Switch>
        <MasterDetailContainer cloud={cloud} sideNavTop={sideNavTop}>
          <Switch>
            <Route path={HOME_ROUTE_PATH}>
              <CROverviewPage />
            </Route>

            <Route path={TABLE_LIST_ROUTE_PATH}>
              <CRTablesListPage />
            </Route>

            <Route path={TABLE_DETAILS_ROUTE_PATH}>
              <CRTableDetailPage />
            </Route>

            <Route path={COLUMN_DETAILS_ROUTE_PATH}>
              <CRColumnDetailPage />
            </Route>

            <Route path={SOURCE_DETAILS_ROUTE_PATH}>
              <CRTableDetailPage />
            </Route>
            <Route path={SOURCE_COLUMN_DETAILS_ROUTE_PATH}>
              <CRColumnDetailPage />
            </Route>

            <Route path={SEED_DETAILS_ROUTE_PATH}>
              <CRTableDetailPage />
            </Route>
            <Route path={SEED_COLUMN_DETAILS_ROUTE_PATH}>
              <CRColumnDetailPage />
            </Route>

            <Route path={MODEL_DETAILS_ROUTE_PATH}>
              <CRTableDetailPage />
            </Route>
            <Route path={MODEL_COLUMN_DETAILS_ROUTE_PATH}>
              <CRColumnDetailPage />
            </Route>

            <Route path={ASSERTIONS_ROUTE_PATH}>
              <CRAssertionListPage />
            </Route>

            <Route path={METRICS_ROUTE_PATH}>
              <CRBMPage />
            </Route>

            <Route path={METRIC_DETAILS_ROUTE_PATH}>
              <CRBMPage />
            </Route>

            <Route path={SSR_ROUTE_PATH}>
              <Loading />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </MasterDetailContainer>
      </Switch>
    </Router>
  );
}

export default CRPage;
