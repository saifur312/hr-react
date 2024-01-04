// const AppRoutes :  () : > {
//   return (
//     <div>AppRoutes</div>
//   )
// }
// export default AppRoutes

// const LoginVerification = (() => import('./html/LoginVerification'));
// const AddEmployee = (() => import('./html/employee/AddEmployee'));
// const EmployeeList = (() => import('./html/employee/EployeeList'));
// const EmployeeDetails = () => import('./html/employee/EmployeeDetails');
// const LoginNoFormik = () => import('./html/LoginNoFormik');
// const Profile = () => import('./html/profile/Profile');

const AddDepartment = () => import('./html/department/AddDepartment');
const DepartmentList = () => import('./html/department/DepartmentList');
const AddSection = () => import('./html/section/AddSection');
const SectionList = () => import('./html/section/SectionList');
const AddBankInfo = () => import('./html/bank info/AddBankInfo');
const BankInfoList = () => import('./html/bank info/BankInfoList');
const AllowanceList = () => import('./html/allowance/AllowanceList');
const AddAllowance = () => import('./html/allowance/AddAllowance');
const AddLoan = () => import('./html/loan/AddLoan');
const LoanList = () => import('./html/loan/LoanList');
const AddJobTitle = () => import('./html/job title/AddJobTitle');
const JobTitleList = () => import('./html/job title/JobTitleList');
const AddOvertime = () => import('./html/overtime/AddOvertime');
const OvertimeList = () => import('./html/overtime/OvertimeList');
const AddDeduction = () => import('./html/deduction/AddDeduction');
const DeductionList = () => import('./html/deduction/DeductionList');
const AddLeave = () => import('./html/leave/AddLeave');
const LeaveList = () => import('./html/leave/LeaveList');
const AddEducation = () => import('./html/education/AddEducation');
const EducationList = () => import('./html/education/EducationList');
const AddExperience = () => import('./html/experience/AddExperience');
const ExperienceList = () => import('./html/experience/ExperienceList');
const AddNominee = () => import('./html/nomineee/AddNominee');
const NomineeList = () => import('./html/nomineee/NomineeList');
const AddDependent = () => import('./html/dependent/AddDependent');
const DependentList = () => import('./html/dependent/DependentList');
const AddAddress = () => import('./html/address/AddAddress');
const AddressList = () => import('./html/address/AddressList');
const UpdateJobTitle = () => import('./html/job title/UpdateJobTitle');
const BarChart = () => import('./html/charts/BarChart');
const LineChart = () => import('./html/charts/LineChart');
const { AddSystem } = () => import('./html/menu/AddSystem');
const { AddSubSystem } = () => import('./html/menu/AddSubSystem');
const { AddFunction } = () => import('./html/menu/AddFunction');
const OperatorFunction = () => import('./html/opfunc/OperatorFunction');

export const routes = [
  { path: '/Add Department', element: AddDepartment },
  { path: '/DepartmentList', element: DepartmentList },
  { path: '/Add Section', element: AddSection },
  { path: '/Section List', element: SectionList },
  { path: '/Add Bank info', element: AddBankInfo },
  { path: '/Bank info List', element: BankInfoList },
  { path: '/Add Allowance', element: AddAllowance },
  { path: '/Allowance List', element: AllowanceList },
  { path: '/Add Loan', element: AddLoan },
  { path: '/Loan List', element: LoanList },
  { path: '/Add Job Title', element: AddJobTitle },
  { path: '/Update Job Title', element: UpdateJobTitle },
  { path: '/Job Title List', element: JobTitleList },
  { path: '/Add Overtime', element: AddOvertime },
  { path: '/Overtime List', element: OvertimeList },
  { path: '/Add Deduction', element: AddDeduction },
  { path: '/Deduction List', element: DeductionList },
  { path: '/Add Leave', element: AddLeave },
  { path: '/Leave List', element: LeaveList },
  { path: '/Add Education', element: AddEducation },
  { path: '/Education List', element: EducationList },
  { path: '/Add Experience', element: AddExperience },
  { path: '/Experience List', element: ExperienceList },
  { path: '/Add Nominee', element: AddNominee },
  { path: '/Nominee List', element: NomineeList },
  { path: '/Add Dependent', element: AddDependent },
  { path: '/Dependent List', element: DependentList },
  { path: '/Add Address', element: AddAddress },
  { path: '/Address List', element: AddressList },
  { path: '/Show Charts', element: BarChart },
  { path: '/Show Line Charts', element: LineChart },
  { path: '/Add System', element: AddSystem },
  { path: '/Add Sub System', element: AddSubSystem },
  { path: '/Add Function', element: AddFunction },
  { path: '/Operator Function', element: OperatorFunction },
];
