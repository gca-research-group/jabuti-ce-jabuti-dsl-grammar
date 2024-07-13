grammar JabutiGrammar;

Contract: 'contract';
BeginDate: 'beginDate';
DueDate: 'dueDate';
Dates: 'dates';
Parties: 'parties';
Application: 'application';
Process: 'process';
Clauses: 'clauses';
Right: 'right';
Prohibition: 'prohibition';
Obligation: 'obligation';
RolePlayer: 'rolePlayer';
Operation: 'operation';
OnBreach: 'onBreach';
OnSuccess: 'OnSuccess';
Push: 'push';
Poll: 'poll';
Read: 'read';
Write: 'write';
Request: 'request';
Response: 'response';
Condition: 'condition';
MaxNumberOfOperation: 'MaxNumberOfOperation';
MessageContent: 'MessageContent';
Log: 'log';
Timeout: 'Timeout';
TimeInterval: 'TimeInterval';
SessionInterval: 'SessionInterval';
WeekDaysInterval: 'WeekDaysInterval';
Variables: 'variables';
Per: 'per';
To: 'to';
Or: 'OR';
Monday: 'Monday';
Tuesday: 'Tuesday';
Wednesday: 'Wednesday';
Thursday: 'Thursday';
Friday: 'Friday';
Saturday: 'Saturday';
Sunday: 'Sunday';
Terms: 'terms';
Month: 'Month';
Week: 'Week';
Day: 'Day';
Hour: 'Hour';
Minute: 'Minute';
Second: 'Second';
When: 'when';
Do: 'do';


Comma : ',' ;
SemiColon : ';' ;
OpenParen : '(' ;
CloseParen : ')' ;
OpenBrace : '{' ;
CloseBrace : '}' ;
Colon:':';
Divide: '/';
Minus:'-';
Assign: '=';
Exclamation: '!';
Greater: '>';
Lass: '<';
Under: '_';
StringLiteral: '"' ~["]* '"';

N00_09
    : '0' [0-9]
    ;

N10_12
    : '1' [0-2]
    ;

N13_24
    : '1' [3-9]
    | '2' [0-4]
    ;

N25_29
    : '2' [5-9]
    ;

N30_31
    : '3' [0-1]
    ;

N32_59
    : '3'   [2-9]
    | [4-5] [0-9]
    ;

Digit
    : [0-9]+
    ;

Word
    : [A-Za-z]+
    ;

WHITESPACE 
    : [ \t\n\r\f]+ -> skip
    ;

SINGLE_COMMENT
    : '//' ~[\r\n]* -> skip
    ;

MULTI_COMMENT
    : '/*' .*? '*/' -> skip
    ;

contract
    :
    (
        Contract variableName OpenBrace
        (variables|dates|parties|clauses)*
        CloseBrace
    )?
    ;

variables
    :
    Variables
    OpenBrace
    variableStatement*
    CloseBrace
    ;

variableStatement
    :
    variableName
    Assign
    (StringLiteral|number|term)
    ;

variableName
    :
    (Word(Under|number|Word)*)
    ;

dates
    :
    Dates
    OpenBrace
    (beginDate|dueDate)+
    CloseBrace
    ;
    
parties
    :
    Parties
    OpenBrace
    (application|process)+
    CloseBrace
    ;
    
clauses
    :
    Clauses
    OpenBrace
    clause+
    CloseBrace
    ;
    
beginDate
    :
    BeginDate
    Assign
    datetime
    ;
    
dueDate
    :
    DueDate
    Assign
    datetime
    ;
    
application
    :
    Application
    Assign
    StringLiteral
    ;

process
    :
    Process
    Assign
    StringLiteral
    ;

clause
    :
    (Right|Prohibition|Obligation)
    variableName
    OpenBrace
    rolePlayer
    operation
    terms
    (onBreach|OnSuccess)?
    CloseBrace
    ;

rolePlayer
    :
    RolePlayer
    Assign
    (Process|Application)
    ;

operation
    :
    Operation
    Assign
    (Push|Poll|Read|Write|Request|Response)
    ;

terms
    :
    Terms
    OpenBrace
    (((termOrWhen) Comma?)
    |(OpenParen term (Or termOrWhen)* CloseParen Comma?))+
    CloseBrace
    ;

termOrWhen
    : term
    | when
    ;

term
    : maxNumberOfOperation
    | messageContent
    | weekDaysInterval
    | timeInterval
    | timeout
    | sessionInterval
    ;

sessionInterval
    :
    SessionInterval
    OpenParen
    number
    (Second|Minute|Day|Week|Month)
    CloseParen
    ;

when
    :
    When
    OpenParen
    (termOrWhen|variableName)
    CloseParen
    Do
    OpenBrace
    termOrWhen
    CloseBrace
    ;

timeout
    :
    Timeout
    OpenParen
    number
    CloseParen
    ;

timeInterval
    :
    TimeInterval
    OpenParen
    time
    To
    time
    CloseParen
    ;

weekDays
    : Monday
    | Tuesday
    | Wednesday
    | Thursday
    | Friday
    | Saturday
    | Sunday
    ;

weekDaysInterval
    :
    WeekDaysInterval
    OpenParen
    weekDays
    To
    weekDays
    CloseParen
    ;

maxNumberOfOperation
    :
    MaxNumberOfOperation
    OpenParen
    number
    Per
    (Second|Hour|Minute|Day|Week|Month)
    CloseParen
    ;

messageContent
    :
    MessageContent
    OpenParen
    (
        StringLiteral |
        (variableName|StringLiteral) comparator (variableName|StringLiteral|number) |
        number comparator (variableName|StringLiteral) |
        (StringLiteral|variableName) comparator number Per (Second|Hour|Minute|Day|Week|Month)
    )
    CloseParen
    ;

comparator:
    equal|notEqual|greaterThan|lassThan|Greater|Lass;

equal
    :
    Assign
    Assign
    ;

notEqual
    :
    Exclamation
    Assign
    ;

greaterThan
    :
    Greater
    Assign
    ;

lassThan
    :
    Lass
    Assign
    ;

onBreach
    :
    OnBreach
    OpenParen
    Log
    OpenParen
    StringLiteral
    CloseParen
    CloseParen
    ;

datetime
    :
    date time?
    ;

date
    : 
    year
    (Divide|Minus)
    month
    (Divide|Minus)
    day;

time
    :
    hour
    Colon
    minute
    (Colon second)?
    ;

second
    : N00_09
    | N10_12
    | N13_24
    | N25_29
    | N30_31
    | N32_59
    ;

minute
    : N00_09
    | N10_12
    | N13_24
    | N25_29
    | N30_31
    | N32_59
    ;

hour
    : N00_09
    | N10_12
    | N13_24
    ;

day
    : N00_09
    | N10_12
    | N13_24
    | N25_29
    | N30_31
    ;

month
    : N00_09
    | N10_12
    ;

year
    : Digit
    ;

number
    : N00_09
    | N10_12
    | N13_24
    | N25_29
    | N30_31
    | N32_59
    | Digit
    ;