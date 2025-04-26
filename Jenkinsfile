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

        stage('Install Docker and Ansible') {
            steps {
                script {
                    // Install Docker
                    sh 'sudo apt-get update'
                    sh 'sudo apt-get install -y docker.io'

                    // Ensure Docker service is running
                    sh 'sudo systemctl enable docker && sudo systemctl start docker'

                    // Install Ansible
                    sh 'sudo apt-get install -y ansible'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove any container with the same name
                    sh "docker rm -f test-container || true"

                    // Run the container
                    sh "docker run -d --name test-container -p ${HOST_PORT}:${CONTAINER_PORT} ${DOCKER_IMAGE}"
                }
            }
        }
      
        stage('Health Check') {
            steps {
                script {
                    // Wait for the container to start
                    sleep 5

                    // Check if the container is responding
                    sh "curl http://localhost:${HOST_PORT} || exit 1"
                }
            }
        }

        stage('Run Ansible Playbook for Deployment') {
            steps {
                script {
                    // Run the Ansible playbook to deploy the application
                    sh 'ansible-playbook -i ansible-deploy/inventory.ini ansible-deploy/deploy_app.yml'
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials1', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    script {
                        // Log in to DockerHub
                        sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"

                        // Push the image
                        sh "docker push ${DOCKER_IMAGE}"
                    }
                }
            }
        }
    }

    post {
        always {
            // Clean up the test container
            script {
                sh "docker rm -f test-container || true"
            }
        }
    }
}
