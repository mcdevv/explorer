export default [
  {
    ticketNumber: '1476',
    description: 'settings - users - filter broken',
    gitBranch: 'bug/pho-1476',
    mRNumber: '2084',
    principalPhotonPath: '/settings/users',
    principlePhotonPlatform: '',
    sprint: 'S2Q3 2022',
    rc: '4.3.3',
    comments: '',
  },
  {
    ticketNumber: '2165',
    description: 'Releases View - Status does not reflect batch status',
    gitBranch: 'bug/pho-2165',
    mRNumber: '2077',
    principalPhotonPath: '/reporting/releases',
    principlePhotonPlatform: '',
    sprint: 'S2Q3 2022',
    rc: '4.3.3',
    comments:
      ' DEV platform do-not-edit_release-status_static-test-data_do-not-edit contains testing data ',
  },
  {
    ticketNumber: '2196',
    description: 'Releases Volt Tab - add Volt Features filter',
    gitBranch: 'feat/pho-2196',
    mRNumber: '2082',
    principalPhotonPath: '/reporting/releases',
    principlePhotonPlatform: '',
    sprint: 'S2Q3 2022',
    rc: '4.3.3',
    comments: 'pull data from morph.status',
  },
  {
    ticketNumber: '2176-v',
    description: 'Volt Status/Tests View - update Volt Features to pull data from morph.status',
    gitBranch: 'feat/pho-2196-v',
    mRNumber: '2090',
    principalPhotonPath: '/reporting/releases',
    principlePhotonPlatform: '',
    sprint: 'S9Q3 2022',
    rc: '4.3.4',
    comments: '',
  },
  {
    ticketNumber: '',
    description: '',
    gitBranch: '',
    principalPhotonPath: '',
    principlePhotonPlatform: '',
    sprint: '',
    rc: '',
    comments: '',
  },
].filter((ticket) => ticket.ticketNumber)