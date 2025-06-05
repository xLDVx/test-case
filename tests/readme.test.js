const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf8');
  });

  test('README contains MCP integration testing section', () => {
    expect(readmeContent).toContain('MCP Integration Testing');
  });

  test('README includes key testing strategy information', () => {
    const requiredSections = [
      'Overview',
      'Testing Strategy',
      'Key Testing Principles',
      'Test Coverage',
      'Running Integration Tests',
      'Best Practices',
      'Troubleshooting'
    ];

    requiredSections.forEach(section => {
      expect(readmeContent).toContain(section);
    });
  });

  test('README has proper markdown formatting', () => {
    // Check for headers
    expect(readmeContent).toMatch(/^#\s/m);
    expect(readmeContent).toMatch(/^##\s/m);
  });

  test('README provides clear instructions for running tests', () => {
    expect(readmeContent).toContain('npm run test:integration');
  });
});