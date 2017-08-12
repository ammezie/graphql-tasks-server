const projects = [
    { id: 1, name: 'Learn React Native' },
    { id: 2, name: 'Workout' },
];

const tasks = [
    { id: 1, title: 'Install Node', completed: true, projectID: 1 },
    { id: 2, title: 'Install React Native CLI:', completed: false, projectID: 1 },
    { id: 3, title: 'Install Xcode', completed: false, projectID: 1 },
    { id: 4, title: 'Morning Jog', completed: true, projectID: 2 },
    { id: 5, title: 'Visit the gym', completed: false, projectID: 2 }
];

module.exports = { projects, tasks };