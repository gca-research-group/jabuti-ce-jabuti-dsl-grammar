import { JabutiGrammarParser } from './antlr/JabutiGrammarParser';
import { JabutiGrammarLexer } from './antlr/JabutiGrammarLexer';
import { ANTLRErrorListener, CharStreams, CommonTokenStream, RecognitionException, Recognizer } from "antlr4ts";

class ErrorListener implements ANTLRErrorListener<any> {
    private errors: any[] = []
    syntaxError(_recognizer: Recognizer<any, any>,
        _offendingSymbol: any,
        line: number,
        charPositionInLine: number,
        message: string, _e: RecognitionException | undefined): void {
        
        this.errors.push(
            {
                startLineNumber:line,
                endLineNumber: line,
                startColumn: charPositionInLine,
                endColumn: charPositionInLine+1,//Let's suppose the length of the error is only 1 char for simplicity
                message,
                code: "1" // This the error code you can customize them as you want
            }
        )
    }

    getErrors(): any[] {
        return this.errors;
    }
}

const code = `contract CreditAgency {
	dates{
		beginDate = 28-02-2023
		dueDate = 28-02-2023
	}	
	parties{
		application = "creditAgency"
		process = "integrationProcess"
	}
	clauses {	
		right requestScore {
			rolePlayer = process 
			operation = poll
		}
	}
}
`;

const inputStream = CharStreams.fromString(code);
const lexer = new JabutiGrammarLexer(inputStream);
lexer.removeErrorListeners()
const errorListener = new ErrorListener();
lexer.addErrorListener(errorListener);
const tokenStream = new CommonTokenStream(lexer);
const parser = new JabutiGrammarParser(tokenStream);
parser.addErrorListener(errorListener);

// Parse the input, where `compilationUnit` is whatever entry point you defined
const value = parser.contract();
const errors = errorListener.getErrors();
parser;