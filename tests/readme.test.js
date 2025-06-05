const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf8');
  });

  test('README should contain API Documentation header', () => {
    expect(readmeContent).toContain('# Project API Documentation');
  });

  test('README should have API Endpoint Technical Specification section', () => {
    expect(readmeContent).toContain('## API Endpoint Technical Specification');
  });

  test('README should include Base URL section', () => {
    expect(readmeContent).toContain('### Base URL');
    expect(readmeContent).toContain('https://api.example.com/v1');
  });

  test('README should have Authentication section', () => {
    expect(readmeContent).toContain('### Authentication');
    expect(readmeContent).toContain('Authorization: Bearer {your_access_token}');
  });

  test('README should document User Management endpoints', () => {
    expect(readmeContent).toContain('#### 1. User Management Endpoints');
    expect(readmeContent).toContain('##### 1.1 Create User');
    expect(readmeContent).toContain('`/users/create`');
  });

  test('README should document Authentication endpoints', () => {
    expect(readmeContent).toContain('#### 2. Authentication Endpoints');
    expect(readmeContent).toContain('##### 2.1 User Login');
    expect(readmeContent).toContain('`/auth/login`');
  });

  test('README should have Error Handling section', () => {
    expect(readmeContent).toContain('### Error Handling');
    expect(readmeContent).toContain('#### Common Error Response Format');
  });

  test('README should include Security Recommendations', () => {
    expect(readmeContent).toContain('### Security Recommendations');
    expect(readmeContent).toContain('1. Always use HTTPS');
  });

  test('README should have Versioning information', () => {
    expect(readmeContent).toContain('### Versioning');
    expect(readmeContent).toContain('Current API Version: `v1`');
  });
});