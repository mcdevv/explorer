export default [
  { name: 'Releases View', path: '/reporting/releases' },
  [
    { name: 'Release Environments', path: '/photon-demo/reporting/releases/release-3.27.0' },
    [
      { name: 'Release By Environment Health', path: '/reporting/releases/release-3.27.0/environments/rc3270' },
      { name: 'Release By Environment Latest Executions', path: '/reporting/releases/release-3.27.0/environments/rc3270/executions' },
      { name: 'Release By Environment Batches', path: '/reporting/releases/release-3.27.0/environments/rc3270/batches' },
      { name: 'Release By Environment Volt Tests', path: '/reporting/releases/release-3.27.0/environments/rc3270/volt' },
      { name: 'Release By Environment Release Notes', path: '/reporting/releases/release-3.27.0/environments/rc3270/notes' }, // !!! title doesn't change
    ],
    { name: 'Release Latest Executions', path: '/reporting/releases/release-3.27.0/executions' },
    { name: 'Release Batches', path: '/reporting/releases/release-3.27.0/batches' },
    { name: 'Release Volt Tests', path: '/reporting/releases/release-3.27.0/volt' },
    { name: 'Release Notes', path: '/reporting/releases/release-3.27.0/notes' },
  ],
  { name: '', path: '' },
  [{ name: '', path: '' }],
]
