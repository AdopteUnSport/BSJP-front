pipeline {
   agent any
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/AdopteUnSport/BSJP-front'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'git branch develop'
        sh 'npm install'
      }
    }
    
     
   /* stage('Test') {
      steps {
         sh 'npm test'
      }
    }    */
    stage('Deliver') { 
            steps {
                sh './scripts/deploy' 
            }
    }
  }
}
