function days() {
    try {
        const date = new Intl.DateTimeFormat([], {
            timeZone: "America/Sao_Paulo",
            day: 'numeric'
        });

        let value = date.format(Date.now());
        return value;
    } catch (error) {
        return new error("BR-TIME ERROR: " + error);
    }
};

const year = function () {
    try {
        const date = new Intl.DateTimeFormat([], {
            timeZone: "America/Sao_Paulo",
            year: 'numeric'
        });

        let value = date.format(Date.now());
        return value;
    } catch (error) {
        return new error("BR-TIME ERROR: " + error);
    }
};;

const month = function () {
    try {
        const date = new Intl.DateTimeFormat([], {
            timeZone: "America/Sao_Paulo",
            month: 'numeric'
        });

        let value = date.format(Date.now());
        return value;
    } catch (error) {
        return new error("BR-TIME ERROR: " + error);
    }
};;

const hour = function () {
    try {
        const date = new Intl.DateTimeFormat([], {
            timeZone: "America/Sao_Paulo",
            hour: 'numeric'
        });

        let value = date.format(Date.now());
        return value;
    } catch (error) {
        return new error("BR-TIME ERROR: " + error);
    }
};;

function minute() {
    try {
        const date = new Intl.DateTimeFormat([], {
            timeZone: "America/Sao_Paulo",
            minute: 'numeric'
        });

        let value = date.format(Date.now());
        return value;
    } catch (error) {
        return new error("BR-TIME ERROR: " + error);
    }
};

const second = function () {
    try {
        const date = new Intl.DateTimeFormat([], {
            timeZone: "America/Sao_Paulo",
            second: 'numeric'
        });

        let value = date.format(Date.now());
        return value;
    } catch (error) {
        return new error("BR-TIME ERROR: " + error);
    }
};;

module.exports.month = month();
module.exports.days = days();
module.exports.year = year();
module.exports.hour = hour();
module.exports.minute = minute();
module.exports.second = second();
