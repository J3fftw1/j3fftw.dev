import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
  _____    ___    ___    ___  _              
  (___  ) / _  ) / ___) / ___)( )_            
      | |(_)_) || (__  | (__  |  _) _   _   _ 
   _  | | _(_ ( |  __) |  __) | |  ( ) ( ) ( )
  ( )_| |( )_) || | /( | | /( | |_ | \\_/ \\_/ |
   \\___/  \\____)( )(_) ( )(_) )\\__) \\  /\\___/ 
                /(     /(    (__)    \\(       
               (__)   (__)           (_)       
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
░░▒█░▀██▒█▀▒█▀░▀█▀░█░░▒█
░▀▄█░▄▄█░█▀░█▀░▒█▒░▀▄▀▄▀

          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio.</div>
        <Seperator>----</Seperator>
        <div>
          You can find the source code on this{" "}
          <Link href="https://github.com/j3fftw1/j3fftw.dev">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
    ██████        ██████████          ██████                        
    ████████████████          ██████████████████                      
  ████████████                        ████████████                    
████████████                            ████████████                  
██████████                                ██████████                  
████████                                    ████████                  
  ████        ██████            ██████        ████                    
    ██      ████████            ████████      ██                      
    ██    ██████  ██            ██  ██████    ██                      
    ██    ██████████            ██████████    ██                      
    ██    ██████████  ████████  ██████████    ██                      
      ██  ████████    ████████    ████████  ██                        
      ██    ████                    ████    ██                        
        ██                                ██                          
          ██                            ██                            
            ████                    ████                              
              ████████████████████████                                
              ████████        ████████                                
              ██  ████        ████  ██                                
              ██                    ██                                
              ██                    ██                                
                ████████████████████                                  
                ██████        ██████                                  
                  ████        ████                                    
                                                                  
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
