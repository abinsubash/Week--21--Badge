// Child Process in Node.js
// In Node.js, a Child Process is a separate process that runs independently of the main Node.js process. It allows you to execute external programs, run system commands, or perform CPU-intensive tasks without blocking the main event loop.

// Node.js provides the child_process module to create and manage these child processes.

// ✅ Why Use Child Processes?
// To handle CPU-intensive tasks without slowing down the main application.

// To execute shell commands like ls, cat, or mkdir.

// To create multiple instances of a Node.js application.

// To perform parallel processing using multiple cores.

// ✅ Types of Child Processes in Node.js
// Node.js provides four main ways to create child processes using the child_process module:

// spawn():

// Used to run system commands or other executables.

// Suitable for continuous output like logs.

// exec():

// Runs a command and buffers the output in a callback.

// Best for short-running commands with small outputs.

// execFile():

// Similar to exec() but only executes files directly (without the shell).

// fork():

// Specifically used to run a Node.js script as a child process.

// Allows communication between parent and child using messages.







// ✅ 1. spawn()
// Purpose: Used to run a command or executable directly.

// Output: Provides a stream of data (does not buffer it).

// Use Case: Suitable for large outputs or when you need real-time data.


// ✅ 2. exec()
// Purpose: Executes a shell command and buffers the entire output.

// Output: Provides the output as a single callback.

// Use Case: Best for small outputs or running commands that don't produce a large amount of data


// ✅ 3. fork()
// Purpose: Used to run another Node.js script as a child process.

// Output: Provides communication via IPC (Inter-Process Communication).

// Use Case: Best for Node.js-specific tasks or CPU-intensive operations.



// Feature	    spawn()	                            exec()	                    fork()
// Use Case	    Large outputs, real-time data	    Small outputs, commands	Node.js scripts
// Output	    Stream (continuous)	                Buffered (stored in memory)	IPC (Inter-process)
// Performance	Efficient for large data	        Not memory-efficient for large data	Efficient for Node.js tasks
// Shell Usage	No shell (direct)	                Uses shell (bash/cmd)	No shell, runs Node.js files
// Memory	    Low memory usage	                High memory usage if large data	Moderate memory usage
// Best For	    File processing, media  conversion  Simple tasks, file operations	Computation, API handling





// fork()
// Node.js scripts
// IPC (Inter-process)
// Efficient for Node.js tasks
// No shell, runs Node.js files
// No shell, runs Node.js files
// Efficient for Node.js tasks
// Moderate memory usage
// Computation, 
// API handlingComputation,
//  API handling
// conversion






// createStream and createReadStream