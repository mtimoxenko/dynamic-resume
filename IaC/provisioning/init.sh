terraform init
    -backend-config="address=https://gitlab.com/api/v4/projects/51944352/terraform/state/dynamic-resume"
    -backend-config="lock_address=https://gitlab.com/api/v4/projects/51944352/terraform/state/dynamic-resume/lock"
    -backend-config="unlock_address=https://gitlab.com/api/v4/projects/51944352/terraform/state/dynamic-resume/lock"
    -backend-config="username=frem3n"
    -backend-config="password=$TF_TOKEN"
    -backend-config="lock_method=POST"
    -backend-config="unlock_method=DELETE"
    -backend-config="retry_wait_min=5"