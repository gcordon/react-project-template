const version = require("../../package.json")

export const development = {
    version,
    links: {
        upm: "/api/test",
        case: "/api/forward"
    },
    apis: {
        api: "/api/test",
        case: "/user"
    }
}

export const pre = {
    version,
    links: {
        upm: "/pre/api/test",
        case: "/pre/api/forward"
    },
    apis: {
        api: "/pre/api/test",
        case: "/pre/user"
    }
}

export const production = {
    version,
    links: {
        upm: "/production/api/test",
        case: "/production/api/forward"
    },
    apis: {
        api: "/production/api/test",
        case: "/production/user"
    }
}