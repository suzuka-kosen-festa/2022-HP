module.exports = {
  ci: {
    assert: {
      assertions: {
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }],
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.9 }]
      }
    },
    upload: {
      target: 'temporary-public-storage',
    }
  },
};
