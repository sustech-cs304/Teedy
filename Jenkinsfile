// pipeline {
//   agent any
//   stages {
//     stage('Build') {
//       steps {
//         sh 'mvn -B -DskipTests clean package'
//       }
//     }
//     stage('Test') {
//       steps {
//         sh 'mvn test --fail-never'
//       }
//     }
//     stage('doc') {
//       steps {
//         sh 'mvn javadoc:javadoc --fail-never'
//       }
//     }
//     stage('pmd') {
//       steps {
//         sh 'mvn pmd:pmd'
//       }
//     }
//     stage('Test report') {
//       steps {
//         sh 'mvn jacoco:report'
//         sh 'mvn surefire-report:report'
//       }
//     }
    
    
    
//   }
//   post {
//       always {
//         archiveArtifacts artifacts: '**/target/site/**', fingerprint: true
//         archiveArtifacts artifacts: '**/target/**/*.jar', fingerprint: true
//         archiveArtifacts artifacts: '**/target/**/*.war', fingerprint: true
//       }
//   }
// }


pipeline {
  agent any

    environment {
        // 你的Docker仓库的凭证ID
        DOCKER_CREDENTIALS_ID = 'nihao'
        // 你想要推送的镜像名字
        IMAGE_NAME = 'mxxx667/teedy_re'
        // 标签，可以根据实际情况设置
        TAG = 'v1.0'
    }

  stages{
    stage('Package') {
      steps {
        checkout scm
        sh 'mvn -B -DskipTests clean package'

      }
    }
    
    stage('Build Image') {
            steps {
                // 使用Docker命令构建镜像
                sh " sudo docker build -t ${IMAGE_NAME}:${TAG} -f Dockerfile ."
            }
        }

        stage('Push Image') {
            steps {
                // 登录Docker Hub
                withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS_ID, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    // 使用Docker命令登录
                    sh " sudo docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
                    // 使用Docker命令推送镜像
                    sh "sudo  docker push ${IMAGE_NAME}:${TAG}"
                }
            }
        }

     // 添加一个阶段来停止和移除之前的容器
        stage('Stop and Remove Previous Containers') {
            steps {
                // 停止并移除名为teedy_01的容器
                sh " sudo docker stop teedy_01 || true"
                sh " docker rm teedy_01 || true"
                // 停止并移除名为teedy_02的容器
                sh "sudo  docker stop teedy_02 || true"
                sh "sudo  docker rm teedy_02 || true"
                // 停止并移除名为teedy_03的容器
                sh " sudo docker stop teedy_03 || true"
                sh " sudo docker rm teedy_03 || true"
            }
        }
    //Running Docker container
    stage('Run containers'){
      steps{
        sh 'sudo docker run -d -p 8084:8080 --name teedy_01 ${IMAGE_NAME}:${TAG}'
        sh 'sudo docker run -d -p 8082:8080 --name teedy_02 ${IMAGE_NAME}:${TAG}'
        sh 'sudo docker run -d -p 8083:8080 --name teedy_03 ${IMAGE_NAME}:${TAG}'
      
      }
    }
  }
}