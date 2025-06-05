const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf8');
  });

  test('README contains MCP integration testing section', () => {
    expect(readmeContent).toContain('MCP Integration Testing');
    expect(readmeContent).toContain('Testing Approach');
    expect(readmeContent).toContain('Key Testing Strategies');
  });

  test('README includes key testing strategy information', () => {
    const requiredSections = [
      'Overview',
      'Purpose',
      'Testing Approach',
      'Key Testing Strategies',
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
    expect(readmeContent).toMatch(/^###\s/m);
  });

  test('README provides clear instructions for running tests', () => {
    expect(readmeContent).toContain('npm test');
  });

  test('README content should be comprehensive', () => {
    const expectedKeywords = [
      'Component Interaction Testing',
      'Error Resilience Validation',
      'Performance and Scalability Checks',
      'Contribution Guidelines'
    ];

    expectedKeywords.forEach(keyword => {
      expect(readmeContent).toContain(keyword);
    });
  });
});