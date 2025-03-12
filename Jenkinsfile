pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                // sh 'mvn -B clean package' 
                sh 'mvn -B --fail-never package' 
            }
        }
        stage('pmd') {
            steps {
                sh 'mvn pmd:pmd'
            }
        }
        //    stage('javadoc') {
        //     steps {
        //         sh 'mvn javadoc:jar'
        //     }
        // }   
        //            stage('Test Report') {
        //     steps {
        //         sh 'mvn surefire-report:report'
        //     }
        // }   
    }

    post {
        always {
            archiveArtifacts artifacts: '**/target/**/*.html', fingerprint: true
            archiveArtifacts artifacts: '**/target/**/*.jar', fingerprint: true
            archiveArtifacts artifacts: '**/target/**/*.war', fingerprint: true
        }
    }
}
