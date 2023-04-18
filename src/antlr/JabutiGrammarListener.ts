// Generated from ./JabutiGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ContractContext } from "./JabutiGrammarParser";
import { VariablesContext } from "./JabutiGrammarParser";
import { VariableNameContext } from "./JabutiGrammarParser";
import { DatesContext } from "./JabutiGrammarParser";
import { PartiesContext } from "./JabutiGrammarParser";
import { ClausesContext } from "./JabutiGrammarParser";
import { BeginDateContext } from "./JabutiGrammarParser";
import { DueDateContext } from "./JabutiGrammarParser";
import { ApplicationContext } from "./JabutiGrammarParser";
import { ProcessContext } from "./JabutiGrammarParser";
import { RightContext } from "./JabutiGrammarParser";
import { ProhibitionContext } from "./JabutiGrammarParser";
import { ObligationContext } from "./JabutiGrammarParser";
import { RolePlayerContext } from "./JabutiGrammarParser";
import { OperationContext } from "./JabutiGrammarParser";
import { TermsContext } from "./JabutiGrammarParser";
import { ConditionalTermOrWhenContext } from "./JabutiGrammarParser";
import { ConditionalTermContext } from "./JabutiGrammarParser";
import { SessionIntervalContext } from "./JabutiGrammarParser";
import { WhenContext } from "./JabutiGrammarParser";
import { TimeoutContext } from "./JabutiGrammarParser";
import { TimeIntervalContext } from "./JabutiGrammarParser";
import { WeekDaysContext } from "./JabutiGrammarParser";
import { WeekDaysIntervalContext } from "./JabutiGrammarParser";
import { MaxNumberOfOperationContext } from "./JabutiGrammarParser";
import { MessageContentContext } from "./JabutiGrammarParser";
import { MessageContentNumericContext } from "./JabutiGrammarParser";
import { MessageContentStringContext } from "./JabutiGrammarParser";
import { EqualContext } from "./JabutiGrammarParser";
import { NotEqualContext } from "./JabutiGrammarParser";
import { GreaterThanContext } from "./JabutiGrammarParser";
import { LassThanContext } from "./JabutiGrammarParser";
import { OnBreachContext } from "./JabutiGrammarParser";
import { DateOrDatetimeContext } from "./JabutiGrammarParser";
import { DatetimeContext } from "./JabutiGrammarParser";
import { DateContext } from "./JabutiGrammarParser";
import { TimeContext } from "./JabutiGrammarParser";
import { SecondContext } from "./JabutiGrammarParser";
import { MinuteContext } from "./JabutiGrammarParser";
import { HourContext } from "./JabutiGrammarParser";
import { DayContext } from "./JabutiGrammarParser";
import { MonthContext } from "./JabutiGrammarParser";
import { YearContext } from "./JabutiGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JabutiGrammarParser`.
 */
export interface JabutiGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.contract`.
	 * @param ctx the parse tree
	 */
	enterContract?: (ctx: ContractContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.contract`.
	 * @param ctx the parse tree
	 */
	exitContract?: (ctx: ContractContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.variables`.
	 * @param ctx the parse tree
	 */
	enterVariables?: (ctx: VariablesContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.variables`.
	 * @param ctx the parse tree
	 */
	exitVariables?: (ctx: VariablesContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.variableName`.
	 * @param ctx the parse tree
	 */
	enterVariableName?: (ctx: VariableNameContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.variableName`.
	 * @param ctx the parse tree
	 */
	exitVariableName?: (ctx: VariableNameContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.dates`.
	 * @param ctx the parse tree
	 */
	enterDates?: (ctx: DatesContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.dates`.
	 * @param ctx the parse tree
	 */
	exitDates?: (ctx: DatesContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.parties`.
	 * @param ctx the parse tree
	 */
	enterParties?: (ctx: PartiesContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.parties`.
	 * @param ctx the parse tree
	 */
	exitParties?: (ctx: PartiesContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.clauses`.
	 * @param ctx the parse tree
	 */
	enterClauses?: (ctx: ClausesContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.clauses`.
	 * @param ctx the parse tree
	 */
	exitClauses?: (ctx: ClausesContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.beginDate`.
	 * @param ctx the parse tree
	 */
	enterBeginDate?: (ctx: BeginDateContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.beginDate`.
	 * @param ctx the parse tree
	 */
	exitBeginDate?: (ctx: BeginDateContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.dueDate`.
	 * @param ctx the parse tree
	 */
	enterDueDate?: (ctx: DueDateContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.dueDate`.
	 * @param ctx the parse tree
	 */
	exitDueDate?: (ctx: DueDateContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.application`.
	 * @param ctx the parse tree
	 */
	enterApplication?: (ctx: ApplicationContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.application`.
	 * @param ctx the parse tree
	 */
	exitApplication?: (ctx: ApplicationContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.process`.
	 * @param ctx the parse tree
	 */
	enterProcess?: (ctx: ProcessContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.process`.
	 * @param ctx the parse tree
	 */
	exitProcess?: (ctx: ProcessContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.right`.
	 * @param ctx the parse tree
	 */
	enterRight?: (ctx: RightContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.right`.
	 * @param ctx the parse tree
	 */
	exitRight?: (ctx: RightContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.prohibition`.
	 * @param ctx the parse tree
	 */
	enterProhibition?: (ctx: ProhibitionContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.prohibition`.
	 * @param ctx the parse tree
	 */
	exitProhibition?: (ctx: ProhibitionContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.obligation`.
	 * @param ctx the parse tree
	 */
	enterObligation?: (ctx: ObligationContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.obligation`.
	 * @param ctx the parse tree
	 */
	exitObligation?: (ctx: ObligationContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.rolePlayer`.
	 * @param ctx the parse tree
	 */
	enterRolePlayer?: (ctx: RolePlayerContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.rolePlayer`.
	 * @param ctx the parse tree
	 */
	exitRolePlayer?: (ctx: RolePlayerContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.operation`.
	 * @param ctx the parse tree
	 */
	enterOperation?: (ctx: OperationContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.operation`.
	 * @param ctx the parse tree
	 */
	exitOperation?: (ctx: OperationContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.terms`.
	 * @param ctx the parse tree
	 */
	enterTerms?: (ctx: TermsContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.terms`.
	 * @param ctx the parse tree
	 */
	exitTerms?: (ctx: TermsContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.conditionalTermOrWhen`.
	 * @param ctx the parse tree
	 */
	enterConditionalTermOrWhen?: (ctx: ConditionalTermOrWhenContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.conditionalTermOrWhen`.
	 * @param ctx the parse tree
	 */
	exitConditionalTermOrWhen?: (ctx: ConditionalTermOrWhenContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.conditionalTerm`.
	 * @param ctx the parse tree
	 */
	enterConditionalTerm?: (ctx: ConditionalTermContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.conditionalTerm`.
	 * @param ctx the parse tree
	 */
	exitConditionalTerm?: (ctx: ConditionalTermContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.sessionInterval`.
	 * @param ctx the parse tree
	 */
	enterSessionInterval?: (ctx: SessionIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.sessionInterval`.
	 * @param ctx the parse tree
	 */
	exitSessionInterval?: (ctx: SessionIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.when`.
	 * @param ctx the parse tree
	 */
	enterWhen?: (ctx: WhenContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.when`.
	 * @param ctx the parse tree
	 */
	exitWhen?: (ctx: WhenContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.timeout`.
	 * @param ctx the parse tree
	 */
	enterTimeout?: (ctx: TimeoutContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.timeout`.
	 * @param ctx the parse tree
	 */
	exitTimeout?: (ctx: TimeoutContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.timeInterval`.
	 * @param ctx the parse tree
	 */
	enterTimeInterval?: (ctx: TimeIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.timeInterval`.
	 * @param ctx the parse tree
	 */
	exitTimeInterval?: (ctx: TimeIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.weekDays`.
	 * @param ctx the parse tree
	 */
	enterWeekDays?: (ctx: WeekDaysContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.weekDays`.
	 * @param ctx the parse tree
	 */
	exitWeekDays?: (ctx: WeekDaysContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.weekDaysInterval`.
	 * @param ctx the parse tree
	 */
	enterWeekDaysInterval?: (ctx: WeekDaysIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.weekDaysInterval`.
	 * @param ctx the parse tree
	 */
	exitWeekDaysInterval?: (ctx: WeekDaysIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.maxNumberOfOperation`.
	 * @param ctx the parse tree
	 */
	enterMaxNumberOfOperation?: (ctx: MaxNumberOfOperationContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.maxNumberOfOperation`.
	 * @param ctx the parse tree
	 */
	exitMaxNumberOfOperation?: (ctx: MaxNumberOfOperationContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.messageContent`.
	 * @param ctx the parse tree
	 */
	enterMessageContent?: (ctx: MessageContentContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.messageContent`.
	 * @param ctx the parse tree
	 */
	exitMessageContent?: (ctx: MessageContentContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.messageContentNumeric`.
	 * @param ctx the parse tree
	 */
	enterMessageContentNumeric?: (ctx: MessageContentNumericContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.messageContentNumeric`.
	 * @param ctx the parse tree
	 */
	exitMessageContentNumeric?: (ctx: MessageContentNumericContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.messageContentString`.
	 * @param ctx the parse tree
	 */
	enterMessageContentString?: (ctx: MessageContentStringContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.messageContentString`.
	 * @param ctx the parse tree
	 */
	exitMessageContentString?: (ctx: MessageContentStringContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.equal`.
	 * @param ctx the parse tree
	 */
	enterEqual?: (ctx: EqualContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.equal`.
	 * @param ctx the parse tree
	 */
	exitEqual?: (ctx: EqualContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.notEqual`.
	 * @param ctx the parse tree
	 */
	enterNotEqual?: (ctx: NotEqualContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.notEqual`.
	 * @param ctx the parse tree
	 */
	exitNotEqual?: (ctx: NotEqualContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.greaterThan`.
	 * @param ctx the parse tree
	 */
	enterGreaterThan?: (ctx: GreaterThanContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.greaterThan`.
	 * @param ctx the parse tree
	 */
	exitGreaterThan?: (ctx: GreaterThanContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.lassThan`.
	 * @param ctx the parse tree
	 */
	enterLassThan?: (ctx: LassThanContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.lassThan`.
	 * @param ctx the parse tree
	 */
	exitLassThan?: (ctx: LassThanContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.onBreach`.
	 * @param ctx the parse tree
	 */
	enterOnBreach?: (ctx: OnBreachContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.onBreach`.
	 * @param ctx the parse tree
	 */
	exitOnBreach?: (ctx: OnBreachContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.dateOrDatetime`.
	 * @param ctx the parse tree
	 */
	enterDateOrDatetime?: (ctx: DateOrDatetimeContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.dateOrDatetime`.
	 * @param ctx the parse tree
	 */
	exitDateOrDatetime?: (ctx: DateOrDatetimeContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.datetime`.
	 * @param ctx the parse tree
	 */
	enterDatetime?: (ctx: DatetimeContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.datetime`.
	 * @param ctx the parse tree
	 */
	exitDatetime?: (ctx: DatetimeContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.second`.
	 * @param ctx the parse tree
	 */
	enterSecond?: (ctx: SecondContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.second`.
	 * @param ctx the parse tree
	 */
	exitSecond?: (ctx: SecondContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.minute`.
	 * @param ctx the parse tree
	 */
	enterMinute?: (ctx: MinuteContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.minute`.
	 * @param ctx the parse tree
	 */
	exitMinute?: (ctx: MinuteContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.hour`.
	 * @param ctx the parse tree
	 */
	enterHour?: (ctx: HourContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.hour`.
	 * @param ctx the parse tree
	 */
	exitHour?: (ctx: HourContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.day`.
	 * @param ctx the parse tree
	 */
	enterDay?: (ctx: DayContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.day`.
	 * @param ctx the parse tree
	 */
	exitDay?: (ctx: DayContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.month`.
	 * @param ctx the parse tree
	 */
	enterMonth?: (ctx: MonthContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.month`.
	 * @param ctx the parse tree
	 */
	exitMonth?: (ctx: MonthContext) => void;

	/**
	 * Enter a parse tree produced by `JabutiGrammarParser.year`.
	 * @param ctx the parse tree
	 */
	enterYear?: (ctx: YearContext) => void;
	/**
	 * Exit a parse tree produced by `JabutiGrammarParser.year`.
	 * @param ctx the parse tree
	 */
	exitYear?: (ctx: YearContext) => void;
}

