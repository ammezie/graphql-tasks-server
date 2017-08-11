const projects = [
    { id: 1, name: 'Sample 1' },
    { id: 2, name: 'Sample 2' },
    { id: 3, name: 'Sample 3' },
];

const tasks = [
    { id: 1, title: '', completed: true, projectID: 1 },
    { id: 2, title: '', completed: false, projectID: 1 },
    { id: 3, title: '', completed: false, projectID: 1 },
    { id: 4, title: '', completed: false, projectID: 1 },
    { id: 5, title: '', completed: true, projectID: 2 },
    { id: 6, title: '', completed: false, projectID: 2 },
    { id: 7, title: '', completed: false, projectID: 3 },
    { id: 8, title: '', completed: false, projectID: 3 },
    { id: 9, title: '', completed: true, projectID: 3 },
    { id: 10, title: '', completed: false, projectID: 3 }
];

module.exports = { projects, tasks };