pipeline {
    agent any

    stages {

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker build -t react-app .
                docker stop react-app || true
                docker rm react-app || true
                docker run -d -p 80:80 react-app
                '''
            }
        }
    }
}
