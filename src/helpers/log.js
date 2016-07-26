export class Log {
    static logMessage(message) {
        process.stdout.write("[Shark] " + message + "\n");
    }
    static logError(message) {
        process.stderr.write("[Error] " + message + "\n");
    }
}