const fs = require('fs');

describe('README Documentation', () => {
  const readmeContent = fs.readFileSync('readme.md', 'utf-8');

  // Existing structural tests
  test('should contain test status sections', () => {
    expect(readmeContent).toContain('## Testing Status');
    expect(readmeContent).toContain('### Current Test Coverage');
    expect(readmeContent).toContain('### Testing Approach');
    expect(readmeContent).toContain('### Next Steps');
  });

  // Enhanced validation for test note content
  test('should have meaningful test status information', () => {
    const testStatusSections = [
      'Initial Status',
      'Test Framework',
      'Coverage',
      'Continuous integration',
      'test-driven development'
    ];

    testStatusSections.forEach(section => {
      expect(readmeContent).toContain(section);
    });
  });

  // New test for comprehensive test note validation
  test('test note should meet quality requirements', () => {
    const testNoteContent = readmeContent.match(/\*Note:.*\./)[0];
    
    // Check minimum length (at least 20 characters)
    expect(testNoteContent.length).toBeGreaterThan(20);
    
    // Check for meaningful keywords
    const requiredKeywords = [
      'test',
      'infrastructure',
      'coverage',
      'enhanced'
    ];

    requiredKeywords.forEach(keyword => {
      expect(testNoteContent.toLowerCase()).toContain(keyword);
    });
  });

  // Test to ensure all required sections are not empty
  test('test status sections should have non-empty content', () => {
    const sections = [
      'Current Test Coverage',
      'Testing Approach',
      'Next Steps'
    ];

    sections.forEach(section => {
      const sectionContent = readmeContent
        .split(`### ${section}`)[1]
        .split('###')[0]
        .trim();
      
      expect(sectionContent.length).toBeGreaterThan(10);
    });
  });
});