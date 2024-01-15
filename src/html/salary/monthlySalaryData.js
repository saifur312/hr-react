export const monthlySalaryData = [
  {
    id: 1,
    sectionName: 'Accounts',
    basic: null,
    allowance: null,
    ot: null,
    totalSalary: null,
    deduction: null,
    netSalary: null,
    employees: [
      {
        id: 1,
        name: 'Saifur',
        basic: 50000,
        allowance: 10000,
        ot: 2000,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 1000,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
      {
        id: 2,
        name: 'Atanu',
        basic: 35000,
        allowance: 3000,
        ot: 5000,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 1500,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
    ],
  },

  //section Store
  {
    id: 2,
    sectionName: 'Store',
    basic: null,
    allowance: null,
    ot: null,
    totalSalary: null,
    deduction: null,
    netSalary: null,
    employees: [
      {
        id: 1,
        name: 'Karim',
        basic: 5000,
        allowance: 1000,
        ot: 200,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 100,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
      {
        id: 2,
        name: 'Salam',
        basic: 3500,
        allowance: 300,
        ot: 500,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 150,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
    ],
  },
  // section HR
  {
    id: 3,
    sectionName: 'HR',
    basic: null,
    allowance: null,
    ot: null,
    totalSalary: null,
    deduction: null,
    netSalary: null,
    employees: [
      {
        id: 1,
        name: 'Yasir',
        basic: 20000,
        allowance: 500,
        ot: 0,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 0,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
      {
        id: 2,
        name: 'Rajib',
        basic: 25000,
        allowance: 2000,
        ot: 500,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 500,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
      {
        id: 3,
        name: 'Nur Mohammad',
        basic: 15000,
        allowance: 1000,
        ot: 2500,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 300,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
    ],
  },

  // section Purchase
  {
    id: 4,
    sectionName: 'Purchase',
    basic: null,
    allowance: null,
    ot: null,
    totalSalary: null,
    deduction: null,
    netSalary: null,
    employees: [
      {
        id: 1,
        name: 'Arafat Khan',
        basic: 12000,
        allowance: 590,
        ot: 965,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 360,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
      {
        id: 2,
        name: 'Sumon Barua',
        basic: 18000,
        allowance: 3600,
        ot: 8500,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 1400,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
      {
        id: 3,
        name: 'Robiul',
        basic: 22000,
        allowance: 2600,
        ot: 3000,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 500,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
    ],
  },

  // section Purchase
  {
    id: 4,
    sectionName: 'Admin',
    basic: null,
    allowance: null,
    ot: null,
    totalSalary: null,
    deduction: null,
    netSalary: null,
    employees: [
      {
        id: 1,
        name: 'Raiyan Ibn Amir',
        basic: 33000,
        allowance: 6000,
        ot: 3600,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 900,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
      {
        id: 2,
        name: 'Sourab',
        basic: 40000,
        allowance: 13000,
        ot: 900,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 2300,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
      {
        id: 3,
        name: 'Farhad Reza',
        basic: 24500,
        allowance: 3500,
        ot: 500,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 1500,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
    ],
  },
  // section Purchase
  {
    id: 5,
    sectionName: 'Medicine',
    basic: null,
    allowance: null,
    ot: null,
    totalSalary: null,
    deduction: null,
    netSalary: null,
    employees: [
      {
        id: 1,
        name: 'Rahman',
        basic: 30000,
        allowance: 5000,
        ot: 5000,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 200,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
      {
        id: 2,
        name: 'Faisal',
        basic: 40000,
        allowance: 8000,
        ot: 5000,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 2500,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
      {
        id: 3,
        name: 'Partha Banik',
        basic: 205000,
        allowance: 0,
        ot: 0,
        total: function () {
          return this.basic + this.allowance + this.ot;
        },
        deduction: 2000,
        netSalary: function () {
          return this.total() - this.deduction;
        },
      },
    ],
  },
];

// Function to calculate the sum of transactional properties for an array of employees
const calculateSectionSums = (employees) => {
  console.log('From calculateSectionSums func');
  return employees.reduce(
    (acc, employee) => {
      acc.basic += employee.basic || 0;
      acc.allowance += employee.allowance || 0;
      acc.ot += employee.ot || 0;
      acc.totalSalary += employee.total() || 0;
      acc.deduction += employee.deduction || 0;
      acc.netSalary += employee.netSalary() || 0;
      return acc;
    },
    {
      basic: 0,
      allowance: 0,
      ot: 0,
      totalSalary: 0,
      deduction: 0,
      netSalary: 0,
    }
  );
};

// Calculate sums and set them to each section's transactional properties
monthlySalaryData.forEach((section) => {
  console.log('From forEach loop');
  const sectionSums = calculateSectionSums(section.employees);
  Object.assign(section, sectionSums);
});

console.log(monthlySalaryData);

// Iterate through the monthlySalaryData array and calculate the sum of netSalary for all sections
export const totalNetSalary = monthlySalaryData.reduce((acc, section) => {
  // Check if netSalary is defined and add it to the accumulator
  if (section.netSalary !== null) {
    acc += section.netSalary;
  }
  return acc;
}, 0);

// Function to calculate the sum of transactional properties for an array of section object
const calculateCompanySums = (sections) => {
  console.log('From calculateCompanySums func');
  return sections.reduce(
    (acc, section) => {
      acc.basic += section.basic || 0;
      acc.allowance += section.allowance || 0;
      acc.ot += section.ot || 0;
      acc.totalSalary += section.totalSalary || 0;
      acc.deduction += section.deduction || 0;
      acc.netSalary += section.netSalary || 0;
      return acc;
    },
    {
      basic: 0,
      allowance: 0,
      ot: 0,
      totalSalary: 0,
      deduction: 0,
      netSalary: 0,
    }
  );
};

export const companySums = calculateCompanySums(monthlySalaryData);
console.log('Company Sums ' + JSON.stringify(companySums));
