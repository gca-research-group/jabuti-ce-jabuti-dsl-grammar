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
    (StringLiteral|Digit)
    ;

variableName
    :
    (Word(Under|Digit|Word)*)
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
    (right|prohibition|obligation)+
    CloseBrace
    ;
    
beginDate
    :
    BeginDate
    Assign
    dateOrDatetime
    ;
    
dueDate
    :
    DueDate
    Assign
    dateOrDatetime
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

right
    :
    Right
    Word
    OpenBrace
    rolePlayer
    operation
    terms
    onBreach?
    CloseBrace
    ;

prohibition
    :
    Prohibition
    Word
    OpenBrace
    rolePlayer
    operation
    terms
    onBreach?
    CloseBrace
    ;

obligation
    :
    Obligation
    Word
    OpenBrace
    rolePlayer
    operation
    terms
    onBreach?
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
    (((conditionalTermOrWhen) Comma?)
    |(OpenParen conditionalTermOrWhen Or conditionalTermOrWhen CloseParen Comma?))+
    CloseBrace
    ;

conditionalTermOrWhen
    : conditionalTerm
    | when
    ;

conditionalTerm
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
    Digit
    (Second|Minute|Day|Week|Month)
    CloseParen
    ;

when
    :
    When
    OpenParen
    conditionalTerm
    CloseParen
    Do
    OpenBrace
    conditionalTerm
    CloseBrace
    ;

timeout
    :
    Timeout
    OpenParen
    Digit
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
    Digit
    Per
    (Second|Hour|Minute|Day|Week|Month)
    CloseParen
    ;

messageContent
    :
    MessageContent
    OpenParen
    (messageContentNumeric|messageContentString)
    CloseParen
    ;

messageContentNumeric
    :
    variableName
    (equal|notEqual|greaterThan|lassThan)
    Digit
    (Per (Second|Hour|Minute|Day|Week|Month))?
    ;

messageContentString
    :
    StringLiteral
    ((equal|notEqual) StringLiteral)?
    ;

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

dateOrDatetime
    :
    (date|datetime)
    ;

datetime
    :
    date
    time
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