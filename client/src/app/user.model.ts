export class UserModel{
    constructor(
        public _id: string,
        public username: string,
        public password: string,
        public serialNumber: string,
        public batchTotalStudents : number,
        public slot : string,
        public email: string,
        public phonenumber : string,
        public startdate: Date,
        public enddate: Date,
        public attendanceCount : number,
        public feepaid : boolean,
        public batchcompleted : boolean,
        public batchmodified : boolean,
        public admitted : boolean,
        public role: string) {}
}