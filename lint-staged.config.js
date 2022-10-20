module.exports = {
    '*.{js,jsx,ts,tsx}': function () {
        return ['npm run lint', 'npm run format', 'npm run type:check'];
    }
  }
