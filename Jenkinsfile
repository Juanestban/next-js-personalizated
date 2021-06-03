pipeline {
  agent {
    docker {
      image "node:14.12-alpine"
    }
  }
  stages {
    stage("test") {
      steps {
        echo "========executing test========"
        sh "npm test"
      }
      post {
          always {
              echo "========always========"
          }
          success {
              echo "========test executed successfully========"
          }
          failure {
              echo "========test execution failed========"
          }
      }
    }
    stage("coverage") {
      steps {
        echo "========executing coverage========"
        sh "npm run test:coverage"
        sh "npm run coverage:out"
      }
      post {
        always {
          echo "========always========"
        }
        success {
          echo "========coverage executed successfully========"
        }
        failure {
          echo "========coverage execution failed========"
        }
      }
    }
    stage("build") {
      steps {
        echo "========executing build========"
        sh "npm run build"
      }
      post {
        always {
          echo "========always========"
        }
        success {
          echo "========build executed successfully========"
        }
        failure {
          echo "========build execution failed========"
        }
      }
    }
  }
  post{
    always {
      echo "========always========"
  }
    success {
      echo "========pipeline executed successfully========"
    }
    failure{
      echo "========pipeline execution failed========"
    }
  }
}