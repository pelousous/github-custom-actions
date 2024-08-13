const core = require('@actions/core');
// const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  // 1) get some input values  to get the target of the deploy
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  // 2) upload files
  // const s3Uri = `s3://${bucket}`

  // the exec command will automatically look
  // for the secrets environments variables setted in deploy.yml
  // exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  core.setOutput("bucket-url", 'amazon url to show');
  core.notice('hello from my custom Javascript Action!');
}

run();