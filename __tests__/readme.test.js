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

  test('README should include test running instructions', () => {
    expect(readmeContent).toContain('npm test');
  });

  test('README structure should be markdown compliant', () => {
    const headings = readmeContent.match(/^#+\s.+/gm) || [];
    expect(headings.length).toBeGreaterThan(3);
  });

  test('README content should be professional and clear', () => {
    expect(readmeContent.length).toBeGreaterThan(500);
    expect(readmeContent).not.toContain('TODO');
  });
});