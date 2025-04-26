pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "ahmedtarekk/angular-soccer-depi-git-jenkins:latest"
        CONTAINER_PORT = "80"
        HOST_PORT = "3001"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Health Check Locally') {
            steps {
                script {
                    sh "docker rm -f test-container || true"
                    sh "docker run -d --name test-container -p ${HOST_PORT}:${CONTAINER_PORT} ${DOCKER_IMAGE}"
                    sleep 5
                    sh "curl http://localhost:${HOST_PORT} || exit 1"
                    sh "docker rm -f test-container"
                }
            }
        }
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials1', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    script {
                        sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                        sh "docker push ${DOCKER_IMAGE}"
                    }
                }
            }
        }

        stage('Install Ansible') {
            steps {
                script {
                    sh '''
                        if ! command -v ansible &> /dev/null; then
                            echo "Installing Ansible..."
                            sudo apt update
                            sudo apt install -y ansible
                        else
                            echo "Ansible is already installed."
                        fi
                    '''
                }
            }
        }

        stage('Deploy with Ansible') {
            steps {
                script {
                    sh 'ansible-playbook -i ansible-deploy/inventory.ini ansible-deploy/deploy_app.yml'
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline finished."
        }
    }
}
