export default function getRoutes(scope) {
  const queryRoutes = {
    "GET /": {
      function: {
        handler: "src/routes/root.main",
        functionName: `${scope.stage}-${scope.name}-root-GET-root`,
      },
    },

    "GET /rows": {
      function: {
        handler: "src/routes/getRowData.main",
        functionName: `${scope.stage}-${scope.name}-root-GET-getRowData`,
      },
    },

    "GET /cells": {
      function: {
        handler: "src/routes/getCellData.main",
        functionName: `${scope.stage}-${scope.name}-root-GET-getCellData`,
      },
    },
  };

  const mutationRoutes = {
    "POST /create/row": {
      function: {
        handler: "src/routes/createRowData.main",
        functionName: `${scope.stage}-${scope.name}-root-POST-createRowData`,
      },
    },

    "POST /create/cell": {
      function: {
        handler: "src/routes/createCellData.main",
        functionName: `${scope.stage}-${scope.name}-root-POST-createCellData`,
      },
    },
  };

  const routes = {
    ...queryRoutes,
    ...mutationRoutes,
  };

  return routes;
}
