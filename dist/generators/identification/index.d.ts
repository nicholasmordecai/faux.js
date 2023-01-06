declare const _default: {
    person: {
        firstName: typeof import("./person").firstName;
        lastName: typeof import("./person").lastName;
        middleNames: typeof import("./person").middleNames;
        nickname: typeof import("./person").nickname;
        fullName: typeof import("./person").fullName;
        gender: typeof import("./person").gender;
    };
    uuid: {
        uuid: typeof import("./uuid").uuid;
    };
};
export default _default;
