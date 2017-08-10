const _ = require('lodash');

// Sample data
const projects = require('./../data/projects');
const tasks = require('./../data/tasks');

const resolvers = {
    Query: {
        // Get a project by name
        projectByName: (root, { name }) => _.find(projects, { name: name }),

        // Fetch all tasks
        fetchTasks: () => tasks,

        // Get a task by ID
        getTask: (root, { id }) => _.find(tasks, { id: id }),

    },
    Mutation: {
        // Mark a task as completed
        markAsCompleted: (root, { taskID }) => {
            const task = _.find(tasks, { id: taskID });
            
            // Throw error if the task doesn't exist
            if (!task) {
                throw new Error(`Couldn't find the task with id ${taskID}`);
            }

            // Throw error if task is already completed
            if (task.completed === true) {
                throw new Error(`Task with id ${taskID} is already completed`);
            }

            task.completed = true;

            return task;
        }
    },
    Project: {
        tasks: (project) => _.filter(tasks, { projectID: project.id })
    },
    Task: {
        project: (task) => _.find(projects, { id: task.projectID })
    }
};

module.exports = resolvers;