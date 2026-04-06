// mastering generics
interface TaxDetails {
    firstMonth: number,
    secondMonth: number,
    thirdMonth: number
}
const taskDetails: TaxDetails = {
    firstMonth: 3000,
    secondMonth: 2000,
    thirdMonth: 4000
}
const calcTotalTax = (month: number): number =>{
    return month
}
interface GoalItem {
    method: string | number
    status: string | number
    department: string | number
}
const goal = [
    {
      id: '1',
      employee: 'Olukayode Benson',
      department: 'Operation',
      month: 'January 2025',
      topic: 'Ad Strategy',
      outcome: 'Certified Campaign Planner',
      method: 'Physical',
      skillsMapping: 'Proficiency',
      status: 'Completed',
      dueDate: '15-01-2025',
      evidence: 'Attached',
      rating: 5,
      timeline: 'mid',
    },
    {
      id: '2',
      employee: 'Mariam Thompson',
      department: 'Accounting',
      month: 'February 2025',
      topic: 'Tax Auditing',
      outcome: 'Senior Auditor Specialist',
      method: 'Online',
      skillsMapping: 'Proficiency',
      status: 'On going',
      dueDate: '20-02-2025',
      evidence: 'Attached',
      rating: 3,
      timeline: 'long',
    },
    {
      id: '3',
      employee: 'Chidi Richardson',
      department: 'IT',
      month: 'January 2025',
      topic: 'Cloud Ops',
      outcome: 'Azure Infrastructure Lead',
      method: 'Online',
      skillsMapping: 'Proficiency',
      status: 'Not started',
      dueDate: '28-01-2025',
      evidence: 'Attached',
      rating: 2,
      timeline: 'long',
    },
    {
      id: '4',
      employee: 'Fatima Al-Sayed',
      department: 'Department',
      month: 'February 2025',
      topic: 'UI Patterns',
      outcome: 'Advanced Product Designer',
      method: 'Physical',
      skillsMapping: 'Proficiency',
      status: 'Completed',
      dueDate: '12-02-2025',
      evidence: 'Attached',
      rating: 4,
      timeline: 'mid',
    },
    {
      id: '5',
      employee: 'Anthony McGeorge',
      department: 'Customer Service',
      month: 'January 2025',
      topic: 'CRM Mastery',
      outcome: 'Lead Pipeline Manager',
      method: 'Physical',
      skillsMapping: 'Proficiency',
      status: 'On going',
      dueDate: '30-01-2025',
      evidence: 'Attached',
      rating: 5,
      timeline: 'mid',
    },
]
interface Filter {
    quarter: number
    year: number
    level: string
    department: string
} 
function filterState (item: GoalItem[]): GoalItem[] {
    return item.filter(value => value.status === 'Completed')
}
console.log(filterState(goal))