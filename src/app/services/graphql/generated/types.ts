export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Career = {
    __typename?: 'Career';
    careerId: Scalars['Float'];
    careerName: Scalars['String'];
    credits: Scalars['String'];
};

export type CareerResponse = {
    __typename?: 'CareerResponse';
    careerId: Scalars['Float'];
    careerName: Scalars['String'];
    credits: Scalars['String'];
    department: Department_Faculty;
};

export type Category = {
    __typename?: 'Category';
    group_id: Scalars['String'];
    id: Scalars['String'];
    name: Scalars['String'];
    subject_code: Scalars['String'];
    weight: Scalars['Float'];
};

export type CategoryInput = {
    group_id: Scalars['String'];
    name: Scalars['String'];
    weight: Scalars['Float'];
};

export type ClassGroup = {
    __typename?: 'ClassGroup';
    groupId: Scalars['String'];
    maxCapacity: Scalars['Float'];
    schedules: Array<Schedule>;
    teacherId: Scalars['String'];
};

export type ClassGroupResponse = {
    __typename?: 'ClassGroupResponse';
    groupId: Scalars['String'];
    maxCapacity: Scalars['Float'];
    schedules: Array<Schedule>;
    subject: Subject;
    teacherId: Scalars['String'];
};

export type Data = {
    __typename?: 'Data';
    message?: Maybe<Scalars['String']>;
    name: Scalars['String'];
};

export type DepartmentResponse = {
    __typename?: 'DepartmentResponse';
    careers: Array<Career>;
    departmentId: Scalars['Float'];
    departmentName: Scalars['String'];
    faculty: Faculty;
};

export type Department_Career = {
    __typename?: 'Department_Career';
    careers: Array<Career>;
    departmentId: Scalars['Float'];
    departmentName: Scalars['String'];
};

export type Department_Faculty = {
    __typename?: 'Department_Faculty';
    departmentId: Scalars['Float'];
    departmentName: Scalars['String'];
    faculty: Faculty;
};

export type Enrollment = {
    __typename?: 'Enrollment';
    finalGrade?: Maybe<Scalars['Float']>;
    group: Scalars['String'];
    id: Scalars['String'];
    semester: Scalars['String'];
    subject: Scalars['String'];
    user: Scalars['String'];
};

export type Faculty = {
    __typename?: 'Faculty';
    facultyId: Scalars['Float'];
    facultyName: Scalars['String'];
};

export type FacultyResponse = {
    __typename?: 'FacultyResponse';
    departments: Array<Department_Career>;
    facultyId: Scalars['Float'];
    facultyName: Scalars['String'];
};

export type Grade = {
    __typename?: 'Grade';
    category_id: Scalars['String'];
    id: Scalars['String'];
    score: Scalars['Float'];
    student_id: Scalars['String'];
};

export type GradeInput = {
    category_id: Scalars['String'];
    score: Scalars['Float'];
    student_id: Scalars['String'];
};

export type Historials = {
    __typename?: 'Historials';
    GPA: Scalars['Float'];
    approved_credits: Scalars['Float'];
    career: Scalars['Float'];
    coursed_credits: Scalars['Float'];
    reprobed_credits: Scalars['Float'];
};

export type HistorialsInput = {
    GPA: Scalars['Float'];
    approved_credits: Scalars['Float'];
    career: Scalars['Float'];
    coursed_credits: Scalars['Float'];
    reprobed_credits: Scalars['Float'];
};

export type Login = {
    __typename?: 'Login';
    token: Scalars['String'];
    user: User;
};

export type Mutation = {
    __typename?: 'Mutation';
    cancelEnrollment: Enrollment;
    createEnrollment: Enrollment;
    createGrade: Scalars['String'];
    createGradingCategory: Scalars['String'];
    createProfile: Scalars['String'];
    deleteGrade: Scalars['String'];
    deleteGradingCategory: Scalars['String'];
    deleteProfile: Scalars['String'];
    getUserByID: User;
    login: Login;
    logout: Scalars['Boolean'];
    register: Login;
    updateGrade: Scalars['String'];
    updateGradingCategory: Scalars['String'];
    updateProfile: Scalars['String'];
    updateUser: User;
};

export type MutationCancelEnrollmentArgs = {
    semester: Scalars['String'];
    subjectId: Scalars['String'];
};

export type MutationCreateEnrollmentArgs = {
    groupId: Scalars['String'];
    semester: Scalars['String'];
};

export type MutationCreateGradeArgs = {
    gradeInput: GradeInput;
};

export type MutationCreateGradingCategoryArgs = {
    categoryInput: CategoryInput;
};

export type MutationCreateProfileArgs = {
    profileInput: ProfileInput;
};

export type MutationDeleteGradeArgs = {
    id: Scalars['String'];
};

export type MutationDeleteGradingCategoryArgs = {
    id: Scalars['String'];
};

export type MutationGetUserByIdArgs = {
    userID: Scalars['String'];
};

export type MutationLoginArgs = {
    password: Scalars['String'];
    username: Scalars['String'];
};

export type MutationRegisterArgs = {
    password: Scalars['String'];
    role: Scalars['String'];
    username: Scalars['String'];
};

export type MutationUpdateGradeArgs = {
    gradeInput: GradeInput;
    id: Scalars['String'];
};

export type MutationUpdateGradingCategoryArgs = {
    categoryInput: CategoryInput;
    id: Scalars['String'];
};

export type MutationUpdateProfileArgs = {
    profileInput: ProfileInput;
};

export type MutationUpdateUserArgs = {
    password: Scalars['String'];
    role: Scalars['String'];
    username: Scalars['String'];
};

export type Profile = {
    __typename?: 'Profile';
    address: Scalars['String'];
    birthdate: Scalars['String'];
    doc_id: Scalars['Float'];
    email: Scalars['String'];
    historials: Array<Historials>;
    lastname: Scalars['String'];
    name: Scalars['String'];
    phone_number: Scalars['String'];
    user_id: Scalars['String'];
};

export type ProfileInput = {
    address: Scalars['String'];
    birthdate: Scalars['String'];
    doc_id: Scalars['Float'];
    email: Scalars['String'];
    historials: Array<HistorialsInput>;
    lastname: Scalars['String'];
    name: Scalars['String'];
    phone_number: Scalars['String'];
};

export type Query = {
    __typename?: 'Query';
    getCareerById: CareerResponse;
    getCareers: Array<CareerResponse>;
    getClassGroups: Array<ClassGroupResponse>;
    getData: Data;
    getDepartmentById: DepartmentResponse;
    getDepartments: Array<DepartmentResponse>;
    getEnrollmentById: Enrollment;
    getEnrollmentsByFilters: Array<Enrollment>;
    getFaculties: Array<FacultyResponse>;
    getFacultyById: FacultyResponse;
    getGrade: Grade;
    getGrades: Array<Grade>;
    getGradingCategories: Array<Category>;
    getGradingCategory: Category;
    getGroupById: ClassGroupResponse;
    getMyProfile: Profile;
    getMySchedule: Array<ClassGroupResponse>;
    getMyScheduleBySemester: Array<ClassGroupResponse>;
    getProfiles: Array<Profile>;
    getProfilesById: Profile;
    getSubjectByCareer: Array<SubjectResponse>;
    getSubjectByCode: SubjectResponse;
    getSubjectById: SubjectResponse;
    getSubjectByName: SubjectResponse;
    getSubjects: Array<SubjectResponse>;
    myAccount: User;
    ping: Scalars['String'];
    pingAuth: Scalars['String'];
    pingStudent: Scalars['String'];
    pingTeacher: Scalars['String'];
    pong: Scalars['String'];
};

export type QueryGetCareerByIdArgs = {
    careerId: Scalars['Float'];
};

export type QueryGetDataArgs = {
    msName: Scalars['String'];
};

export type QueryGetDepartmentByIdArgs = {
    departmentId: Scalars['Float'];
};

export type QueryGetEnrollmentByIdArgs = {
    enrollmentId: Scalars['String'];
};

export type QueryGetEnrollmentsByFiltersArgs = {
    groupId?: InputMaybe<Scalars['String']>;
    semester?: InputMaybe<Scalars['String']>;
    subjectId?: InputMaybe<Scalars['Float']>;
};

export type QueryGetFacultyByIdArgs = {
    facultyId: Scalars['Float'];
};

export type QueryGetGradeArgs = {
    id: Scalars['String'];
};

export type QueryGetGradesArgs = {
    category_id?: InputMaybe<Scalars['String']>;
    student_id?: InputMaybe<Scalars['String']>;
};

export type QueryGetGradingCategoriesArgs = {
    group_id?: InputMaybe<Scalars['String']>;
    subject_code?: InputMaybe<Scalars['String']>;
};

export type QueryGetGradingCategoryArgs = {
    id: Scalars['String'];
};

export type QueryGetGroupByIdArgs = {
    classGroupId: Scalars['String'];
};

export type QueryGetMyScheduleBySemesterArgs = {
    semester: Scalars['String'];
};

export type QueryGetProfilesByIdArgs = {
    user_id: Scalars['String'];
};

export type QueryGetSubjectByCareerArgs = {
    careerId: Scalars['Float'];
};

export type QueryGetSubjectByCodeArgs = {
    subjectCode: Scalars['String'];
};

export type QueryGetSubjectByIdArgs = {
    subjectId: Scalars['Float'];
};

export type QueryGetSubjectByNameArgs = {
    subjectName: Scalars['String'];
};

export type Schedule = {
    __typename?: 'Schedule';
    building: Scalars['Float'];
    classroom: Scalars['Float'];
    day: Scalars['Float'];
    endTime: Scalars['String'];
    scheduleId: Scalars['Float'];
    startTime: Scalars['String'];
};

export type Subject = {
    __typename?: 'Subject';
    careerId: Scalars['Float'];
    credits: Scalars['Float'];
    curriculum?: Maybe<Scalars['String']>;
    subjectCode: Scalars['String'];
    subjectId: Scalars['Float'];
    subjectName: Scalars['String'];
};

export type SubjectResponse = {
    __typename?: 'SubjectResponse';
    careerId: Scalars['Float'];
    credits: Scalars['Float'];
    curriculum?: Maybe<Scalars['String']>;
    groups: Array<ClassGroup>;
    subjectCode: Scalars['String'];
    subjectId: Scalars['Float'];
    subjectName: Scalars['String'];
};

export type User = {
    __typename?: 'User';
    createdAt?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    role: Scalars['String'];
    updatedAt?: Maybe<Scalars['String']>;
    username: Scalars['String'];
};
