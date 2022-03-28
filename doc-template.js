module.exports = (projectData) => {
return `
    test:
    # ${projectData.title}
    ${projectData.description}
`;
};