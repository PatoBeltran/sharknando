class Log {
    static logMessage(message) {
        console.log("[Shark] " + message);
    };
    static logError(message) {
        console.error("[Error] " + message);
    };
};

module.exports = Log;