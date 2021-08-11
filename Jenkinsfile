@Library('kibo-pipeline-shared-lib')_

ngProjectPipeline (
    FAIL_ON_TEST_FAILURE: false,
	SUPPORTS_NUGET: false,
    KUBE_TARGET_PORT :'3000',
    KUBE_SERVICE_PORT : '80',
    SCALE_UNITS: ['sb'],
    DOCKER_IMAGE : 'kibo/vue-storefront',
	DOCKER_REPO: '542216209467.dkr.ecr.us-east-1.amazonaws.com',
	KUBE_SERVICE_NAME :'vue-storefront',
    KUBE_HEALTHCHECK_URL2 : '/assets/icons/youtube.svg',
    CONFIG_MAPS: ['kibo-vuestorefront'],
    INGRESS_HOST_PREFIX: 'vuestorefront',
    INGRESS_REWRITE_TARGET: '/',
    INGRESS_PATH_MATCH: '/',
    DOCKERFILE: './dev/docker/Dockerfile',
    KUBE_TEMPLATE_FILE : 'com/kibo/kubernetes/ng-web-service.yml');
q