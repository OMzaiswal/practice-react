pipeline {
    agent any

    stages {

        stage('Deploy') {
            steps {
                sh '''
                docker build -t react-app .

                docker stop react-app || true
                docker rm react-app || true

                docker run -d -p 80:80 --name react-app react-app
                '''
            }
        }
    }
}
