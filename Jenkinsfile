pipeline {
   agent any
    tools {nodejs "good node"}
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/AdopteUnSport/BSJP-front'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    
     
    stage('build') {
      steps {
        sh 'node -v'
         sh 'ng build --prod'
      }
    }    
    stage('Deliver') { 
            steps {
                sh './scripts/deploy' 
            }
    }
  }
}
