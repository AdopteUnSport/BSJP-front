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
      when {branch 'develop'}
      steps {
    
        sh 'git checkout develop'
        sh 'git pull'
        sh 'npm install'
        }
      
      }
    }
    
      stage('Install dependencies') {
      when {branch 'master'}
        sh 'git pull'
        sh 'npm install'
        }
      
      }
    }
    stage('build') {
      steps {
        sh 'node -v'
        sh 'npm rebuild node-sass'
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
