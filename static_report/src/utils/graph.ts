export function getDownstreamSet(
  nodeIds: string[],
  getNeighbors: (id: string) => string[],
) {
  const downstreamSet: Set<string> = new Set();
  const visited: Set<string> = new Set();

  const dfs = (id: string) => {
    if (visited.has(id)) {
      return;
    }
    visited.add(id);
    const neighbors = getNeighbors(id);

    for (const neighborId of neighbors) {
      dfs(neighborId);
    }

    downstreamSet.add(id);
  };

  for (const nodeId of nodeIds) {
    dfs(nodeId);
  }

  return downstreamSet;
}

export function getUpstreamSet(
  nodeIds: string[],
  getNeighbors: (id: string) => string[],
) {
  getDownstreamSet(nodeIds, getNeighbors);
}

// https://en.wikipedia.org/wiki/Topological_sorting
// Kahn's algorithm generated by ChatGPT
export function topologySort(
  nodeIds: string[],
  getNeighbors: (id: string) => string[],
): string[] {
  const inDegree: { [key: string]: number } = {};
  const edges: { [key: string]: string[] } = {};

  // Calculate the in-degree and edges for each node
  for (const nodeId of nodeIds) {
    inDegree[nodeId] = 0;
    edges[nodeId] = [];
  }

  for (const nodeId of nodeIds) {
    const neighbors = getNeighbors(nodeId);
    for (const neighborId of neighbors) {
      inDegree[neighborId] = inDegree[neighborId]
        ? inDegree[neighborId] + 1
        : 1;
      edges[nodeId].push(neighborId);
    }
  }

  const sortedNodes: string[] = [];
  const queue: string[] = [];

  // Add nodes with in-degree 0 to the queue
  for (const nodeId of nodeIds) {
    if (inDegree[nodeId] === 0) {
      queue.push(nodeId);
    }
  }

  // Perform topological sorting
  while (queue.length > 0) {
    const node = queue.shift()!;
    sortedNodes.push(node);

    const neighbors = edges[node];
    for (const neighborId of neighbors) {
      inDegree[neighborId] -= 1;
      if (inDegree[neighborId] === 0) {
        queue.push(neighborId);
      }
    }
  }

  // Check if there are remaining edges (cycle detection)
  // for (const nodeId of nodeIds) {
  //   if (inDegree[nodeId] > 0) {
  //     throw new Error(
  //       'The graph contains a cycle. Topological sorting is not possible.',
  //     );
  //   }
  // }

  return sortedNodes;
}
