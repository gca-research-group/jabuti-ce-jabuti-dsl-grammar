// Generated from ./JabutiGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { JabutiGrammarListener } from "./JabutiGrammarListener";

export class JabutiGrammarParser extends Parser {
	public static readonly Contract = 1;
	public static readonly BeginDate = 2;
	public static readonly DueDate = 3;
	public static readonly Dates = 4;
	public static readonly Parties = 5;
	public static readonly Application = 6;
	public static readonly Process = 7;
	public static readonly Clauses = 8;
	public static readonly Right = 9;
	public static readonly Prohibition = 10;
	public static readonly Obligation = 11;
	public static readonly RolePlayer = 12;
	public static readonly Operation = 13;
	public static readonly OnBreach = 14;
	public static readonly Push = 15;
	public static readonly Poll = 16;
	public static readonly Read = 17;
	public static readonly Write = 18;
	public static readonly Request = 19;
	public static readonly Response = 20;
	public static readonly Condition = 21;
	public static readonly MaxNumberOfOperation = 22;
	public static readonly MessageContent = 23;
	public static readonly Log = 24;
	public static readonly Timeout = 25;
	public static readonly TimeInterval = 26;
	public static readonly SessionInterval = 27;
	public static readonly WeekDaysInterval = 28;
	public static readonly Variables = 29;
	public static readonly Per = 30;
	public static readonly To = 31;
	public static readonly Or = 32;
	public static readonly Monday = 33;
	public static readonly Tuesday = 34;
	public static readonly Wednesday = 35;
	public static readonly Thursday = 36;
	public static readonly Friday = 37;
	public static readonly Saturday = 38;
	public static readonly Sunday = 39;
	public static readonly Terms = 40;
	public static readonly Month = 41;
	public static readonly Week = 42;
	public static readonly Day = 43;
	public static readonly Hour = 44;
	public static readonly Minute = 45;
	public static readonly Second = 46;
	public static readonly When = 47;
	public static readonly Do = 48;
	public static readonly Comma = 49;
	public static readonly SemiColon = 50;
	public static readonly OpenParen = 51;
	public static readonly CloseParen = 52;
	public static readonly OpenBrace = 53;
	public static readonly CloseBrace = 54;
	public static readonly Colon = 55;
	public static readonly Divide = 56;
	public static readonly Minus = 57;
	public static readonly Assign = 58;
	public static readonly Exclamation = 59;
	public static readonly Greater = 60;
	public static readonly Lass = 61;
	public static readonly Under = 62;
	public static readonly StringLiteral = 63;
	public static readonly N00_09 = 64;
	public static readonly N10_12 = 65;
	public static readonly N13_24 = 66;
	public static readonly N25_29 = 67;
	public static readonly N30_31 = 68;
	public static readonly N32_59 = 69;
	public static readonly Digit = 70;
	public static readonly Word = 71;
	public static readonly WHITESPACE = 72;
	public static readonly SINGLE_COMMENT = 73;
	public static readonly MULTI_COMMENT = 74;
	public static readonly RULE_contract = 0;
	public static readonly RULE_variables = 1;
	public static readonly RULE_variableName = 2;
	public static readonly RULE_dates = 3;
	public static readonly RULE_parties = 4;
	public static readonly RULE_clauses = 5;
	public static readonly RULE_beginDate = 6;
	public static readonly RULE_dueDate = 7;
	public static readonly RULE_application = 8;
	public static readonly RULE_process = 9;
	public static readonly RULE_right = 10;
	public static readonly RULE_prohibition = 11;
	public static readonly RULE_obligation = 12;
	public static readonly RULE_rolePlayer = 13;
	public static readonly RULE_operation = 14;
	public static readonly RULE_terms = 15;
	public static readonly RULE_conditionalTermOrWhen = 16;
	public static readonly RULE_conditionalTerm = 17;
	public static readonly RULE_sessionInterval = 18;
	public static readonly RULE_when = 19;
	public static readonly RULE_timeout = 20;
	public static readonly RULE_timeInterval = 21;
	public static readonly RULE_weekDays = 22;
	public static readonly RULE_weekDaysInterval = 23;
	public static readonly RULE_maxNumberOfOperation = 24;
	public static readonly RULE_messageContent = 25;
	public static readonly RULE_messageContentNumeric = 26;
	public static readonly RULE_messageContentString = 27;
	public static readonly RULE_equal = 28;
	public static readonly RULE_notEqual = 29;
	public static readonly RULE_greaterThan = 30;
	public static readonly RULE_lassThan = 31;
	public static readonly RULE_onBreach = 32;
	public static readonly RULE_dateOrDatetime = 33;
	public static readonly RULE_datetime = 34;
	public static readonly RULE_date = 35;
	public static readonly RULE_time = 36;
	public static readonly RULE_second = 37;
	public static readonly RULE_minute = 38;
	public static readonly RULE_hour = 39;
	public static readonly RULE_day = 40;
	public static readonly RULE_month = 41;
	public static readonly RULE_year = 42;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"contract", "variables", "variableName", "dates", "parties", "clauses", 
		"beginDate", "dueDate", "application", "process", "right", "prohibition", 
		"obligation", "rolePlayer", "operation", "terms", "conditionalTermOrWhen", 
		"conditionalTerm", "sessionInterval", "when", "timeout", "timeInterval", 
		"weekDays", "weekDaysInterval", "maxNumberOfOperation", "messageContent", 
		"messageContentNumeric", "messageContentString", "equal", "notEqual", 
		"greaterThan", "lassThan", "onBreach", "dateOrDatetime", "datetime", "date", 
		"time", "second", "minute", "hour", "day", "month", "year",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'contract'", "'beginDate'", "'dueDate'", "'dates'", "'parties'", 
		"'application'", "'process'", "'clauses'", "'right'", "'prohibition'", 
		"'obligation'", "'rolePlayer'", "'operation'", "'onBreach'", "'push'", 
		"'poll'", "'read'", "'write'", "'request'", "'response'", "'condition'", 
		"'MaxNumberOfOperation'", "'MessageContent'", "'log'", "'Timeout'", "'TimeInterval'", 
		"'SessionInterval'", "'WeekDaysInterval'", "'variables'", "'per'", "'to'", 
		"'OR'", "'Monday'", "'Tuesday'", "'Wednesday'", "'Thursday'", "'Friday'", 
		"'Saturday'", "'Sunday'", "'terms'", "'Month'", "'Week'", "'Day'", "'Hour'", 
		"'Minute'", "'Second'", "'when'", "'do'", "','", "';'", "'('", "')'", 
		"'{'", "'}'", "':'", "'/'", "'-'", "'='", "'!'", "'>'", "'<'", "'_'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Contract", "BeginDate", "DueDate", "Dates", "Parties", "Application", 
		"Process", "Clauses", "Right", "Prohibition", "Obligation", "RolePlayer", 
		"Operation", "OnBreach", "Push", "Poll", "Read", "Write", "Request", "Response", 
		"Condition", "MaxNumberOfOperation", "MessageContent", "Log", "Timeout", 
		"TimeInterval", "SessionInterval", "WeekDaysInterval", "Variables", "Per", 
		"To", "Or", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", 
		"Sunday", "Terms", "Month", "Week", "Day", "Hour", "Minute", "Second", 
		"When", "Do", "Comma", "SemiColon", "OpenParen", "CloseParen", "OpenBrace", 
		"CloseBrace", "Colon", "Divide", "Minus", "Assign", "Exclamation", "Greater", 
		"Lass", "Under", "StringLiteral", "N00_09", "N10_12", "N13_24", "N25_29", 
		"N30_31", "N32_59", "Digit", "Word", "WHITESPACE", "SINGLE_COMMENT", "MULTI_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JabutiGrammarParser._LITERAL_NAMES, JabutiGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JabutiGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "JabutiGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return JabutiGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JabutiGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JabutiGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public contract(): ContractContext {
		let _localctx: ContractContext = new ContractContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JabutiGrammarParser.RULE_contract);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JabutiGrammarParser.Contract) {
				{
				this.state = 86;
				this.match(JabutiGrammarParser.Contract);
				this.state = 87;
				this.variableName();
				this.state = 88;
				this.match(JabutiGrammarParser.OpenBrace);
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JabutiGrammarParser.Dates) | (1 << JabutiGrammarParser.Parties) | (1 << JabutiGrammarParser.Clauses) | (1 << JabutiGrammarParser.Variables))) !== 0)) {
					{
					this.state = 93;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case JabutiGrammarParser.Variables:
						{
						this.state = 89;
						this.variables();
						}
						break;
					case JabutiGrammarParser.Dates:
						{
						this.state = 90;
						this.dates();
						}
						break;
					case JabutiGrammarParser.Parties:
						{
						this.state = 91;
						this.parties();
						}
						break;
					case JabutiGrammarParser.Clauses:
						{
						this.state = 92;
						this.clauses();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 97;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 98;
				this.match(JabutiGrammarParser.CloseBrace);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variables(): VariablesContext {
		let _localctx: VariablesContext = new VariablesContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JabutiGrammarParser.RULE_variables);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(JabutiGrammarParser.Variables);
			this.state = 103;
			this.match(JabutiGrammarParser.OpenBrace);
			this.state = 104;
			this.variableName();
			this.state = 105;
			this.match(JabutiGrammarParser.Assign);
			this.state = 106;
			_la = this._input.LA(1);
			if (!(_la === JabutiGrammarParser.StringLiteral || _la === JabutiGrammarParser.Digit)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 107;
			this.match(JabutiGrammarParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableName(): VariableNameContext {
		let _localctx: VariableNameContext = new VariableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JabutiGrammarParser.RULE_variableName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 109;
			this.match(JabutiGrammarParser.Word);
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (JabutiGrammarParser.Under - 62)) | (1 << (JabutiGrammarParser.Digit - 62)) | (1 << (JabutiGrammarParser.Word - 62)))) !== 0)) {
				{
				{
				this.state = 110;
				_la = this._input.LA(1);
				if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (JabutiGrammarParser.Under - 62)) | (1 << (JabutiGrammarParser.Digit - 62)) | (1 << (JabutiGrammarParser.Word - 62)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dates(): DatesContext {
		let _localctx: DatesContext = new DatesContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JabutiGrammarParser.RULE_dates);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this.match(JabutiGrammarParser.Dates);
			this.state = 117;
			this.match(JabutiGrammarParser.OpenBrace);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 120;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JabutiGrammarParser.BeginDate:
					{
					this.state = 118;
					this.beginDate();
					}
					break;
				case JabutiGrammarParser.DueDate:
					{
					this.state = 119;
					this.dueDate();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === JabutiGrammarParser.BeginDate || _la === JabutiGrammarParser.DueDate);
			this.state = 124;
			this.match(JabutiGrammarParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parties(): PartiesContext {
		let _localctx: PartiesContext = new PartiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JabutiGrammarParser.RULE_parties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(JabutiGrammarParser.Parties);
			this.state = 127;
			this.match(JabutiGrammarParser.OpenBrace);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 130;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JabutiGrammarParser.Application:
					{
					this.state = 128;
					this.application();
					}
					break;
				case JabutiGrammarParser.Process:
					{
					this.state = 129;
					this.process();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === JabutiGrammarParser.Application || _la === JabutiGrammarParser.Process);
			this.state = 134;
			this.match(JabutiGrammarParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clauses(): ClausesContext {
		let _localctx: ClausesContext = new ClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JabutiGrammarParser.RULE_clauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(JabutiGrammarParser.Clauses);
			this.state = 137;
			this.match(JabutiGrammarParser.OpenBrace);
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 141;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JabutiGrammarParser.Right:
					{
					this.state = 138;
					this.right();
					}
					break;
				case JabutiGrammarParser.Prohibition:
					{
					this.state = 139;
					this.prohibition();
					}
					break;
				case JabutiGrammarParser.Obligation:
					{
					this.state = 140;
					this.obligation();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JabutiGrammarParser.Right) | (1 << JabutiGrammarParser.Prohibition) | (1 << JabutiGrammarParser.Obligation))) !== 0));
			this.state = 145;
			this.match(JabutiGrammarParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public beginDate(): BeginDateContext {
		let _localctx: BeginDateContext = new BeginDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JabutiGrammarParser.RULE_beginDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(JabutiGrammarParser.BeginDate);
			this.state = 148;
			this.match(JabutiGrammarParser.Assign);
			this.state = 149;
			this.dateOrDatetime();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dueDate(): DueDateContext {
		let _localctx: DueDateContext = new DueDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JabutiGrammarParser.RULE_dueDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(JabutiGrammarParser.DueDate);
			this.state = 152;
			this.match(JabutiGrammarParser.Assign);
			this.state = 153;
			this.dateOrDatetime();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public application(): ApplicationContext {
		let _localctx: ApplicationContext = new ApplicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JabutiGrammarParser.RULE_application);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.match(JabutiGrammarParser.Application);
			this.state = 156;
			this.match(JabutiGrammarParser.Assign);
			this.state = 157;
			this.match(JabutiGrammarParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public process(): ProcessContext {
		let _localctx: ProcessContext = new ProcessContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JabutiGrammarParser.RULE_process);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(JabutiGrammarParser.Process);
			this.state = 160;
			this.match(JabutiGrammarParser.Assign);
			this.state = 161;
			this.match(JabutiGrammarParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public right(): RightContext {
		let _localctx: RightContext = new RightContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JabutiGrammarParser.RULE_right);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(JabutiGrammarParser.Right);
			this.state = 164;
			this.match(JabutiGrammarParser.Word);
			this.state = 165;
			this.match(JabutiGrammarParser.OpenBrace);
			this.state = 166;
			this.rolePlayer();
			this.state = 167;
			this.operation();
			this.state = 168;
			this.terms();
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JabutiGrammarParser.OnBreach) {
				{
				this.state = 169;
				this.onBreach();
				}
			}

			this.state = 172;
			this.match(JabutiGrammarParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prohibition(): ProhibitionContext {
		let _localctx: ProhibitionContext = new ProhibitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, JabutiGrammarParser.RULE_prohibition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(JabutiGrammarParser.Prohibition);
			this.state = 175;
			this.match(JabutiGrammarParser.Word);
			this.state = 176;
			this.match(JabutiGrammarParser.OpenBrace);
			this.state = 177;
			this.rolePlayer();
			this.state = 178;
			this.operation();
			this.state = 179;
			this.terms();
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JabutiGrammarParser.OnBreach) {
				{
				this.state = 180;
				this.onBreach();
				}
			}

			this.state = 183;
			this.match(JabutiGrammarParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public obligation(): ObligationContext {
		let _localctx: ObligationContext = new ObligationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JabutiGrammarParser.RULE_obligation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.match(JabutiGrammarParser.Obligation);
			this.state = 186;
			this.match(JabutiGrammarParser.Word);
			this.state = 187;
			this.match(JabutiGrammarParser.OpenBrace);
			this.state = 188;
			this.rolePlayer();
			this.state = 189;
			this.operation();
			this.state = 190;
			this.terms();
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JabutiGrammarParser.OnBreach) {
				{
				this.state = 191;
				this.onBreach();
				}
			}

			this.state = 194;
			this.match(JabutiGrammarParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rolePlayer(): RolePlayerContext {
		let _localctx: RolePlayerContext = new RolePlayerContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JabutiGrammarParser.RULE_rolePlayer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(JabutiGrammarParser.RolePlayer);
			this.state = 197;
			this.match(JabutiGrammarParser.Assign);
			this.state = 198;
			_la = this._input.LA(1);
			if (!(_la === JabutiGrammarParser.Application || _la === JabutiGrammarParser.Process)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operation(): OperationContext {
		let _localctx: OperationContext = new OperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, JabutiGrammarParser.RULE_operation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(JabutiGrammarParser.Operation);
			this.state = 201;
			this.match(JabutiGrammarParser.Assign);
			this.state = 202;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JabutiGrammarParser.Push) | (1 << JabutiGrammarParser.Poll) | (1 << JabutiGrammarParser.Read) | (1 << JabutiGrammarParser.Write) | (1 << JabutiGrammarParser.Request) | (1 << JabutiGrammarParser.Response))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public terms(): TermsContext {
		let _localctx: TermsContext = new TermsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, JabutiGrammarParser.RULE_terms);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.match(JabutiGrammarParser.Terms);
			this.state = 205;
			this.match(JabutiGrammarParser.OpenBrace);
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 218;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JabutiGrammarParser.MaxNumberOfOperation:
				case JabutiGrammarParser.MessageContent:
				case JabutiGrammarParser.Timeout:
				case JabutiGrammarParser.TimeInterval:
				case JabutiGrammarParser.SessionInterval:
				case JabutiGrammarParser.WeekDaysInterval:
				case JabutiGrammarParser.When:
					{
					{
					{
					this.state = 206;
					this.conditionalTermOrWhen();
					}
					this.state = 208;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JabutiGrammarParser.Comma) {
						{
						this.state = 207;
						this.match(JabutiGrammarParser.Comma);
						}
					}

					}
					}
					break;
				case JabutiGrammarParser.OpenParen:
					{
					{
					this.state = 210;
					this.match(JabutiGrammarParser.OpenParen);
					this.state = 211;
					this.conditionalTermOrWhen();
					this.state = 212;
					this.match(JabutiGrammarParser.Or);
					this.state = 213;
					this.conditionalTermOrWhen();
					this.state = 214;
					this.match(JabutiGrammarParser.CloseParen);
					this.state = 216;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === JabutiGrammarParser.Comma) {
						{
						this.state = 215;
						this.match(JabutiGrammarParser.Comma);
						}
					}

					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (JabutiGrammarParser.MaxNumberOfOperation - 22)) | (1 << (JabutiGrammarParser.MessageContent - 22)) | (1 << (JabutiGrammarParser.Timeout - 22)) | (1 << (JabutiGrammarParser.TimeInterval - 22)) | (1 << (JabutiGrammarParser.SessionInterval - 22)) | (1 << (JabutiGrammarParser.WeekDaysInterval - 22)) | (1 << (JabutiGrammarParser.When - 22)) | (1 << (JabutiGrammarParser.OpenParen - 22)))) !== 0));
			this.state = 222;
			this.match(JabutiGrammarParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalTermOrWhen(): ConditionalTermOrWhenContext {
		let _localctx: ConditionalTermOrWhenContext = new ConditionalTermOrWhenContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JabutiGrammarParser.RULE_conditionalTermOrWhen);
		try {
			this.state = 226;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JabutiGrammarParser.MaxNumberOfOperation:
			case JabutiGrammarParser.MessageContent:
			case JabutiGrammarParser.Timeout:
			case JabutiGrammarParser.TimeInterval:
			case JabutiGrammarParser.SessionInterval:
			case JabutiGrammarParser.WeekDaysInterval:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 224;
				this.conditionalTerm();
				}
				break;
			case JabutiGrammarParser.When:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 225;
				this.when();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalTerm(): ConditionalTermContext {
		let _localctx: ConditionalTermContext = new ConditionalTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, JabutiGrammarParser.RULE_conditionalTerm);
		try {
			this.state = 234;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JabutiGrammarParser.MaxNumberOfOperation:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 228;
				this.maxNumberOfOperation();
				}
				break;
			case JabutiGrammarParser.MessageContent:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 229;
				this.messageContent();
				}
				break;
			case JabutiGrammarParser.WeekDaysInterval:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 230;
				this.weekDaysInterval();
				}
				break;
			case JabutiGrammarParser.TimeInterval:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 231;
				this.timeInterval();
				}
				break;
			case JabutiGrammarParser.Timeout:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 232;
				this.timeout();
				}
				break;
			case JabutiGrammarParser.SessionInterval:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 233;
				this.sessionInterval();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sessionInterval(): SessionIntervalContext {
		let _localctx: SessionIntervalContext = new SessionIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, JabutiGrammarParser.RULE_sessionInterval);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(JabutiGrammarParser.SessionInterval);
			this.state = 237;
			this.match(JabutiGrammarParser.OpenParen);
			this.state = 238;
			this.match(JabutiGrammarParser.Digit);
			this.state = 239;
			_la = this._input.LA(1);
			if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (JabutiGrammarParser.Month - 41)) | (1 << (JabutiGrammarParser.Week - 41)) | (1 << (JabutiGrammarParser.Day - 41)) | (1 << (JabutiGrammarParser.Minute - 41)) | (1 << (JabutiGrammarParser.Second - 41)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 240;
			this.match(JabutiGrammarParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public when(): WhenContext {
		let _localctx: WhenContext = new WhenContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, JabutiGrammarParser.RULE_when);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(JabutiGrammarParser.When);
			this.state = 243;
			this.match(JabutiGrammarParser.OpenParen);
			this.state = 244;
			this.conditionalTerm();
			this.state = 245;
			this.match(JabutiGrammarParser.CloseParen);
			this.state = 246;
			this.match(JabutiGrammarParser.Do);
			this.state = 247;
			this.match(JabutiGrammarParser.OpenBrace);
			this.state = 248;
			this.conditionalTerm();
			this.state = 249;
			this.match(JabutiGrammarParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeout(): TimeoutContext {
		let _localctx: TimeoutContext = new TimeoutContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, JabutiGrammarParser.RULE_timeout);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.match(JabutiGrammarParser.Timeout);
			this.state = 252;
			this.match(JabutiGrammarParser.OpenParen);
			this.state = 253;
			this.match(JabutiGrammarParser.Digit);
			this.state = 254;
			this.match(JabutiGrammarParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeInterval(): TimeIntervalContext {
		let _localctx: TimeIntervalContext = new TimeIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, JabutiGrammarParser.RULE_timeInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(JabutiGrammarParser.TimeInterval);
			this.state = 257;
			this.match(JabutiGrammarParser.OpenParen);
			this.state = 258;
			this.time();
			this.state = 259;
			this.match(JabutiGrammarParser.To);
			this.state = 260;
			this.time();
			this.state = 261;
			this.match(JabutiGrammarParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public weekDays(): WeekDaysContext {
		let _localctx: WeekDaysContext = new WeekDaysContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, JabutiGrammarParser.RULE_weekDays);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			_la = this._input.LA(1);
			if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JabutiGrammarParser.Monday - 33)) | (1 << (JabutiGrammarParser.Tuesday - 33)) | (1 << (JabutiGrammarParser.Wednesday - 33)) | (1 << (JabutiGrammarParser.Thursday - 33)) | (1 << (JabutiGrammarParser.Friday - 33)) | (1 << (JabutiGrammarParser.Saturday - 33)) | (1 << (JabutiGrammarParser.Sunday - 33)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public weekDaysInterval(): WeekDaysIntervalContext {
		let _localctx: WeekDaysIntervalContext = new WeekDaysIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, JabutiGrammarParser.RULE_weekDaysInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(JabutiGrammarParser.WeekDaysInterval);
			this.state = 266;
			this.match(JabutiGrammarParser.OpenParen);
			this.state = 267;
			this.weekDays();
			this.state = 268;
			this.match(JabutiGrammarParser.To);
			this.state = 269;
			this.weekDays();
			this.state = 270;
			this.match(JabutiGrammarParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public maxNumberOfOperation(): MaxNumberOfOperationContext {
		let _localctx: MaxNumberOfOperationContext = new MaxNumberOfOperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, JabutiGrammarParser.RULE_maxNumberOfOperation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.match(JabutiGrammarParser.MaxNumberOfOperation);
			this.state = 273;
			this.match(JabutiGrammarParser.OpenParen);
			this.state = 274;
			this.match(JabutiGrammarParser.Digit);
			this.state = 275;
			this.match(JabutiGrammarParser.Per);
			this.state = 276;
			_la = this._input.LA(1);
			if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (JabutiGrammarParser.Month - 41)) | (1 << (JabutiGrammarParser.Week - 41)) | (1 << (JabutiGrammarParser.Day - 41)) | (1 << (JabutiGrammarParser.Hour - 41)) | (1 << (JabutiGrammarParser.Minute - 41)) | (1 << (JabutiGrammarParser.Second - 41)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 277;
			this.match(JabutiGrammarParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public messageContent(): MessageContentContext {
		let _localctx: MessageContentContext = new MessageContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, JabutiGrammarParser.RULE_messageContent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.match(JabutiGrammarParser.MessageContent);
			this.state = 280;
			this.match(JabutiGrammarParser.OpenParen);
			this.state = 283;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JabutiGrammarParser.Word:
				{
				this.state = 281;
				this.messageContentNumeric();
				}
				break;
			case JabutiGrammarParser.StringLiteral:
				{
				this.state = 282;
				this.messageContentString();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 285;
			this.match(JabutiGrammarParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public messageContentNumeric(): MessageContentNumericContext {
		let _localctx: MessageContentNumericContext = new MessageContentNumericContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, JabutiGrammarParser.RULE_messageContentNumeric);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.variableName();
			this.state = 292;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JabutiGrammarParser.Assign:
				{
				this.state = 288;
				this.equal();
				}
				break;
			case JabutiGrammarParser.Exclamation:
				{
				this.state = 289;
				this.notEqual();
				}
				break;
			case JabutiGrammarParser.Greater:
				{
				this.state = 290;
				this.greaterThan();
				}
				break;
			case JabutiGrammarParser.Lass:
				{
				this.state = 291;
				this.lassThan();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 294;
			this.match(JabutiGrammarParser.Digit);
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JabutiGrammarParser.Per) {
				{
				this.state = 295;
				this.match(JabutiGrammarParser.Per);
				this.state = 296;
				_la = this._input.LA(1);
				if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (JabutiGrammarParser.Month - 41)) | (1 << (JabutiGrammarParser.Week - 41)) | (1 << (JabutiGrammarParser.Day - 41)) | (1 << (JabutiGrammarParser.Hour - 41)) | (1 << (JabutiGrammarParser.Minute - 41)) | (1 << (JabutiGrammarParser.Second - 41)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public messageContentString(): MessageContentStringContext {
		let _localctx: MessageContentStringContext = new MessageContentStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, JabutiGrammarParser.RULE_messageContentString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(JabutiGrammarParser.StringLiteral);
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JabutiGrammarParser.Assign || _la === JabutiGrammarParser.Exclamation) {
				{
				this.state = 302;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JabutiGrammarParser.Assign:
					{
					this.state = 300;
					this.equal();
					}
					break;
				case JabutiGrammarParser.Exclamation:
					{
					this.state = 301;
					this.notEqual();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 304;
				this.match(JabutiGrammarParser.StringLiteral);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equal(): EqualContext {
		let _localctx: EqualContext = new EqualContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, JabutiGrammarParser.RULE_equal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.match(JabutiGrammarParser.Assign);
			this.state = 309;
			this.match(JabutiGrammarParser.Assign);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public notEqual(): NotEqualContext {
		let _localctx: NotEqualContext = new NotEqualContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, JabutiGrammarParser.RULE_notEqual);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.match(JabutiGrammarParser.Exclamation);
			this.state = 312;
			this.match(JabutiGrammarParser.Assign);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public greaterThan(): GreaterThanContext {
		let _localctx: GreaterThanContext = new GreaterThanContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, JabutiGrammarParser.RULE_greaterThan);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.match(JabutiGrammarParser.Greater);
			this.state = 315;
			this.match(JabutiGrammarParser.Assign);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lassThan(): LassThanContext {
		let _localctx: LassThanContext = new LassThanContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, JabutiGrammarParser.RULE_lassThan);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.match(JabutiGrammarParser.Lass);
			this.state = 318;
			this.match(JabutiGrammarParser.Assign);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public onBreach(): OnBreachContext {
		let _localctx: OnBreachContext = new OnBreachContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, JabutiGrammarParser.RULE_onBreach);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.match(JabutiGrammarParser.OnBreach);
			this.state = 321;
			this.match(JabutiGrammarParser.OpenParen);
			this.state = 322;
			this.match(JabutiGrammarParser.Log);
			this.state = 323;
			this.match(JabutiGrammarParser.OpenParen);
			this.state = 324;
			this.match(JabutiGrammarParser.StringLiteral);
			this.state = 325;
			this.match(JabutiGrammarParser.CloseParen);
			this.state = 326;
			this.match(JabutiGrammarParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateOrDatetime(): DateOrDatetimeContext {
		let _localctx: DateOrDatetimeContext = new DateOrDatetimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, JabutiGrammarParser.RULE_dateOrDatetime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 328;
				this.date();
				}
				break;

			case 2:
				{
				this.state = 329;
				this.datetime();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datetime(): DatetimeContext {
		let _localctx: DatetimeContext = new DatetimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, JabutiGrammarParser.RULE_datetime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.date();
			this.state = 333;
			this.time();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, JabutiGrammarParser.RULE_date);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.year();
			this.state = 336;
			_la = this._input.LA(1);
			if (!(_la === JabutiGrammarParser.Divide || _la === JabutiGrammarParser.Minus)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 337;
			this.month();
			this.state = 338;
			_la = this._input.LA(1);
			if (!(_la === JabutiGrammarParser.Divide || _la === JabutiGrammarParser.Minus)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 339;
			this.day();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public time(): TimeContext {
		let _localctx: TimeContext = new TimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, JabutiGrammarParser.RULE_time);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 341;
			this.hour();
			this.state = 342;
			this.match(JabutiGrammarParser.Colon);
			this.state = 343;
			this.minute();
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JabutiGrammarParser.Colon) {
				{
				this.state = 344;
				this.match(JabutiGrammarParser.Colon);
				this.state = 345;
				this.second();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public second(): SecondContext {
		let _localctx: SecondContext = new SecondContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, JabutiGrammarParser.RULE_second);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			_la = this._input.LA(1);
			if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (JabutiGrammarParser.N00_09 - 64)) | (1 << (JabutiGrammarParser.N10_12 - 64)) | (1 << (JabutiGrammarParser.N13_24 - 64)) | (1 << (JabutiGrammarParser.N25_29 - 64)) | (1 << (JabutiGrammarParser.N30_31 - 64)) | (1 << (JabutiGrammarParser.N32_59 - 64)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public minute(): MinuteContext {
		let _localctx: MinuteContext = new MinuteContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, JabutiGrammarParser.RULE_minute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			_la = this._input.LA(1);
			if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (JabutiGrammarParser.N00_09 - 64)) | (1 << (JabutiGrammarParser.N10_12 - 64)) | (1 << (JabutiGrammarParser.N13_24 - 64)) | (1 << (JabutiGrammarParser.N25_29 - 64)) | (1 << (JabutiGrammarParser.N30_31 - 64)) | (1 << (JabutiGrammarParser.N32_59 - 64)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hour(): HourContext {
		let _localctx: HourContext = new HourContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, JabutiGrammarParser.RULE_hour);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			_la = this._input.LA(1);
			if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (JabutiGrammarParser.N00_09 - 64)) | (1 << (JabutiGrammarParser.N10_12 - 64)) | (1 << (JabutiGrammarParser.N13_24 - 64)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public day(): DayContext {
		let _localctx: DayContext = new DayContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, JabutiGrammarParser.RULE_day);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			_la = this._input.LA(1);
			if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (JabutiGrammarParser.N00_09 - 64)) | (1 << (JabutiGrammarParser.N10_12 - 64)) | (1 << (JabutiGrammarParser.N13_24 - 64)) | (1 << (JabutiGrammarParser.N25_29 - 64)) | (1 << (JabutiGrammarParser.N30_31 - 64)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public month(): MonthContext {
		let _localctx: MonthContext = new MonthContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, JabutiGrammarParser.RULE_month);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			_la = this._input.LA(1);
			if (!(_la === JabutiGrammarParser.N00_09 || _la === JabutiGrammarParser.N10_12)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public year(): YearContext {
		let _localctx: YearContext = new YearContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, JabutiGrammarParser.RULE_year);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.match(JabutiGrammarParser.Digit);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03L\u016B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02" +
		"`\n\x02\f\x02\x0E\x02c\v\x02\x03\x02\x03\x02\x05\x02g\n\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x07\x04r" +
		"\n\x04\f\x04\x0E\x04u\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x06\x05{\n" +
		"\x05\r\x05\x0E\x05|\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x06" +
		"\x06\x85\n\x06\r\x06\x0E\x06\x86\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x06\x07\x90\n\x07\r\x07\x0E\x07\x91\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xAD" +
		"\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xB8\n" +
		"\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\xC3\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xD3" +
		"\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xDB\n\x11" +
		"\x06\x11\xDD\n\x11\r\x11\x0E\x11\xDE\x03\x11\x03\x11\x03\x12\x03\x12\x05" +
		"\x12\xE5\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\xED\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u011E\n\x1B\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0127\n\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x05\x1C\u012C\n\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0131\n\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u0135\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F" +
		"\x03\x1F\x03 \x03 \x03 \x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03#\x03#\x05#\u014D\n#\x03$\x03$\x03$\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x05&\u015D\n&\x03\'\x03\'\x03(\x03" +
		"(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x02\x02\x02-\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02\x02\x0E\x04\x02AAHH\x04\x02@@HI\x03" +
		"\x02\b\t\x03\x02\x11\x16\x04\x02+-/0\x03\x02#)\x03\x02+0\x03\x02:;\x03" +
		"\x02BG\x03\x02BD\x03\x02BF\x03\x02BC\x02\u0162\x02f\x03\x02\x02\x02\x04" +
		"h\x03\x02\x02\x02\x06o\x03\x02\x02\x02\bv\x03\x02\x02\x02\n\x80\x03\x02" +
		"\x02\x02\f\x8A\x03\x02\x02\x02\x0E\x95\x03\x02\x02\x02\x10\x99\x03\x02" +
		"\x02\x02\x12\x9D\x03\x02\x02\x02\x14\xA1\x03\x02\x02\x02\x16\xA5\x03\x02" +
		"\x02\x02\x18\xB0\x03\x02\x02\x02\x1A\xBB\x03\x02\x02\x02\x1C\xC6\x03\x02" +
		"\x02\x02\x1E\xCA\x03\x02\x02\x02 \xCE\x03\x02\x02\x02\"\xE4\x03\x02\x02" +
		"\x02$\xEC\x03\x02\x02\x02&\xEE\x03\x02\x02\x02(\xF4\x03\x02\x02\x02*\xFD" +
		"\x03\x02\x02\x02,\u0102\x03\x02\x02\x02.\u0109\x03\x02\x02\x020\u010B" +
		"\x03\x02\x02\x022\u0112\x03\x02\x02\x024\u0119\x03\x02\x02\x026\u0121" +
		"\x03\x02\x02\x028\u012D\x03\x02\x02\x02:\u0136\x03\x02\x02\x02<\u0139" +
		"\x03\x02\x02\x02>\u013C\x03\x02\x02\x02@\u013F\x03\x02\x02\x02B\u0142" +
		"\x03\x02\x02\x02D\u014C\x03\x02\x02\x02F\u014E\x03\x02\x02\x02H\u0151" +
		"\x03\x02\x02\x02J\u0157\x03\x02\x02\x02L\u015E\x03\x02\x02\x02N\u0160" +
		"\x03\x02\x02\x02P\u0162\x03\x02\x02\x02R\u0164\x03\x02\x02\x02T\u0166" +
		"\x03\x02\x02\x02V\u0168\x03\x02\x02\x02XY\x07\x03\x02\x02YZ\x05\x06\x04" +
		"\x02Za\x077\x02\x02[`\x05\x04\x03\x02\\`\x05\b\x05\x02]`\x05\n\x06\x02" +
		"^`\x05\f\x07\x02_[\x03\x02\x02\x02_\\\x03\x02\x02\x02_]\x03\x02\x02\x02" +
		"_^\x03\x02\x02\x02`c\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02" +
		"bd\x03\x02\x02\x02ca\x03\x02\x02\x02de\x078\x02\x02eg\x03\x02\x02\x02" +
		"fX\x03\x02\x02\x02fg\x03\x02\x02\x02g\x03\x03\x02\x02\x02hi\x07\x1F\x02" +
		"\x02ij\x077\x02\x02jk\x05\x06\x04\x02kl\x07<\x02\x02lm\t\x02\x02\x02m" +
		"n\x078\x02\x02n\x05\x03\x02\x02\x02os\x07I\x02\x02pr\t\x03\x02\x02qp\x03" +
		"\x02\x02\x02ru\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02t\x07" +
		"\x03\x02\x02\x02us\x03\x02\x02\x02vw\x07\x06\x02\x02wz\x077\x02\x02x{" +
		"\x05\x0E\b\x02y{\x05\x10\t\x02zx\x03\x02\x02\x02zy\x03\x02\x02\x02{|\x03" +
		"\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}~\x03\x02\x02\x02~\x7F" +
		"\x078\x02\x02\x7F\t\x03\x02\x02\x02\x80\x81\x07\x07\x02\x02\x81\x84\x07" +
		"7\x02\x02\x82\x85\x05\x12\n\x02\x83\x85\x05\x14\v\x02\x84\x82\x03\x02" +
		"\x02\x02\x84\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x84\x03\x02" +
		"\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x078" +
		"\x02\x02\x89\v\x03\x02\x02\x02\x8A\x8B\x07\n\x02\x02\x8B\x8F\x077\x02" +
		"\x02\x8C\x90\x05\x16\f\x02\x8D\x90\x05\x18\r\x02\x8E\x90\x05\x1A\x0E\x02" +
		"\x8F\x8C\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x8E\x03\x02\x02\x02" +
		"\x90\x91\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02" +
		"\x92\x93\x03\x02\x02\x02\x93\x94\x078\x02\x02\x94\r\x03\x02\x02\x02\x95" +
		"\x96\x07\x04\x02\x02\x96\x97\x07<\x02\x02\x97\x98\x05D#\x02\x98\x0F\x03" +
		"\x02\x02\x02\x99\x9A\x07\x05\x02\x02\x9A\x9B\x07<\x02\x02\x9B\x9C\x05" +
		"D#\x02\x9C\x11\x03\x02\x02\x02\x9D\x9E\x07\b\x02\x02\x9E\x9F\x07<\x02" +
		"\x02\x9F\xA0\x07A\x02\x02\xA0\x13\x03\x02\x02\x02\xA1\xA2\x07\t\x02\x02" +
		"\xA2\xA3\x07<\x02\x02\xA3\xA4\x07A\x02\x02\xA4\x15\x03\x02\x02\x02\xA5" +
		"\xA6\x07\v\x02\x02\xA6\xA7\x07I\x02\x02\xA7\xA8\x077\x02\x02\xA8\xA9\x05" +
		"\x1C\x0F\x02\xA9\xAA\x05\x1E\x10\x02\xAA\xAC\x05 \x11\x02\xAB\xAD\x05" +
		"B\"\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x03\x02" +
		"\x02\x02\xAE\xAF\x078\x02\x02\xAF\x17\x03\x02\x02\x02\xB0\xB1\x07\f\x02" +
		"\x02\xB1\xB2\x07I\x02\x02\xB2\xB3\x077\x02\x02\xB3\xB4\x05\x1C\x0F\x02" +
		"\xB4\xB5\x05\x1E\x10\x02\xB5\xB7\x05 \x11\x02\xB6\xB8\x05B\"\x02\xB7\xB6" +
		"\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBA" +
		"\x078\x02\x02\xBA\x19\x03\x02\x02\x02\xBB\xBC\x07\r\x02\x02\xBC\xBD\x07" +
		"I\x02\x02\xBD\xBE\x077\x02\x02\xBE\xBF\x05\x1C\x0F\x02\xBF\xC0\x05\x1E" +
		"\x10\x02\xC0\xC2\x05 \x11\x02\xC1\xC3\x05B\"\x02\xC2\xC1\x03\x02\x02\x02" +
		"\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x078\x02\x02" +
		"\xC5\x1B\x03\x02\x02\x02\xC6\xC7\x07\x0E\x02\x02\xC7\xC8\x07<\x02\x02" +
		"\xC8\xC9\t\x04\x02\x02\xC9\x1D\x03\x02\x02\x02\xCA\xCB\x07\x0F\x02\x02" +
		"\xCB\xCC\x07<\x02\x02\xCC\xCD\t\x05\x02\x02\xCD\x1F\x03\x02\x02\x02\xCE" +
		"\xCF\x07*\x02\x02\xCF\xDC\x077\x02\x02\xD0\xD2\x05\"\x12\x02\xD1\xD3\x07" +
		"3\x02\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xDD\x03" +
		"\x02\x02\x02\xD4\xD5\x075\x02\x02\xD5\xD6\x05\"\x12\x02\xD6\xD7\x07\"" +
		"\x02\x02\xD7\xD8\x05\"\x12\x02\xD8\xDA\x076\x02\x02\xD9\xDB\x073\x02\x02" +
		"\xDA\xD9\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDD\x03\x02\x02\x02" +
		"\xDC\xD0\x03\x02\x02\x02\xDC\xD4\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02" +
		"\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02" +
		"\xE0\xE1\x078\x02\x02\xE1!\x03\x02\x02\x02\xE2\xE5\x05$\x13\x02\xE3\xE5" +
		"\x05(\x15\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE3\x03\x02\x02\x02\xE5#\x03" +
		"\x02\x02\x02\xE6\xED\x052\x1A\x02\xE7\xED\x054\x1B\x02\xE8\xED\x050\x19" +
		"\x02\xE9\xED\x05,\x17\x02\xEA\xED\x05*\x16\x02\xEB\xED\x05&\x14\x02\xEC" +
		"\xE6\x03\x02\x02\x02\xEC\xE7\x03\x02\x02\x02\xEC\xE8\x03\x02\x02\x02\xEC" +
		"\xE9\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xEB\x03\x02\x02\x02\xED" +
		"%\x03\x02\x02\x02\xEE\xEF\x07\x1D\x02\x02\xEF\xF0\x075\x02\x02\xF0\xF1" +
		"\x07H\x02\x02\xF1\xF2\t\x06\x02\x02\xF2\xF3\x076\x02\x02\xF3\'\x03\x02" +
		"\x02\x02\xF4\xF5\x071\x02\x02\xF5\xF6\x075\x02\x02\xF6\xF7\x05$\x13\x02" +
		"\xF7\xF8\x076\x02\x02\xF8\xF9\x072\x02\x02\xF9\xFA\x077\x02\x02\xFA\xFB" +
		"\x05$\x13\x02\xFB\xFC\x078\x02\x02\xFC)\x03\x02\x02\x02\xFD\xFE\x07\x1B" +
		"\x02\x02\xFE\xFF\x075\x02\x02\xFF\u0100\x07H\x02\x02\u0100\u0101\x076" +
		"\x02\x02\u0101+\x03\x02\x02\x02\u0102\u0103\x07\x1C\x02\x02\u0103\u0104" +
		"\x075\x02\x02\u0104\u0105\x05J&\x02\u0105\u0106\x07!\x02\x02\u0106\u0107" +
		"\x05J&\x02\u0107\u0108\x076\x02\x02\u0108-\x03\x02\x02\x02\u0109\u010A" +
		"\t\x07\x02\x02\u010A/\x03\x02\x02\x02\u010B\u010C\x07\x1E\x02\x02\u010C" +
		"\u010D\x075\x02\x02\u010D\u010E\x05.\x18\x02\u010E\u010F\x07!\x02\x02" +
		"\u010F\u0110\x05.\x18\x02\u0110\u0111\x076\x02\x02\u01111\x03\x02\x02" +
		"\x02\u0112\u0113\x07\x18\x02\x02\u0113\u0114\x075\x02\x02\u0114\u0115" +
		"\x07H\x02\x02\u0115\u0116\x07 \x02\x02\u0116\u0117\t\b\x02\x02\u0117\u0118" +
		"\x076\x02\x02\u01183\x03\x02\x02\x02\u0119\u011A\x07\x19\x02\x02\u011A" +
		"\u011D\x075\x02\x02\u011B\u011E\x056\x1C\x02\u011C\u011E\x058\x1D\x02" +
		"\u011D\u011B\x03\x02\x02\x02\u011D\u011C\x03\x02\x02\x02\u011E\u011F\x03" +
		"\x02\x02\x02\u011F\u0120\x076\x02\x02\u01205\x03\x02\x02\x02\u0121\u0126" +
		"\x05\x06\x04\x02\u0122\u0127\x05:\x1E\x02\u0123\u0127\x05<\x1F\x02\u0124" +
		"\u0127\x05> \x02\u0125\u0127\x05@!\x02\u0126\u0122\x03\x02\x02\x02\u0126" +
		"\u0123\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0125\x03\x02" +
		"\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012B\x07H\x02\x02\u0129\u012A" +
		"\x07 \x02\x02\u012A\u012C\t\b\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B" +
		"\u012C\x03\x02\x02\x02\u012C7\x03\x02\x02\x02\u012D\u0134\x07A\x02\x02" +
		"\u012E\u0131\x05:\x1E\x02\u012F\u0131\x05<\x1F\x02\u0130\u012E\x03\x02" +
		"\x02\x02\u0130\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
		"\u0133\x07A\x02\x02\u0133\u0135\x03\x02\x02\x02\u0134\u0130\x03\x02\x02" +
		"\x02\u0134\u0135\x03\x02\x02\x02\u01359\x03\x02\x02\x02\u0136\u0137\x07" +
		"<\x02\x02\u0137\u0138\x07<\x02\x02\u0138;\x03\x02\x02\x02\u0139\u013A" +
		"\x07=\x02\x02\u013A\u013B\x07<\x02\x02\u013B=\x03\x02\x02\x02\u013C\u013D" +
		"\x07>\x02\x02\u013D\u013E\x07<\x02\x02\u013E?\x03\x02\x02\x02\u013F\u0140" +
		"\x07?\x02\x02\u0140\u0141\x07<\x02\x02\u0141A\x03\x02\x02\x02\u0142\u0143" +
		"\x07\x10\x02\x02\u0143\u0144\x075\x02\x02\u0144\u0145\x07\x1A\x02\x02" +
		"\u0145\u0146\x075\x02\x02\u0146\u0147\x07A\x02\x02\u0147\u0148\x076\x02" +
		"\x02\u0148\u0149\x076\x02\x02\u0149C\x03\x02\x02\x02\u014A\u014D\x05H" +
		"%\x02\u014B\u014D\x05F$\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014B\x03" +
		"\x02\x02\x02\u014DE\x03\x02\x02\x02\u014E\u014F\x05H%\x02\u014F\u0150" +
		"\x05J&\x02\u0150G\x03\x02\x02\x02\u0151\u0152\x05V,\x02\u0152\u0153\t" +
		"\t\x02\x02\u0153\u0154\x05T+\x02\u0154\u0155\t\t\x02\x02\u0155\u0156\x05" +
		"R*\x02\u0156I\x03\x02\x02\x02\u0157\u0158\x05P)\x02\u0158\u0159\x079\x02" +
		"\x02\u0159\u015C\x05N(\x02\u015A\u015B\x079\x02\x02\u015B\u015D\x05L\'" +
		"\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015DK\x03" +
		"\x02\x02\x02\u015E\u015F\t\n\x02\x02\u015FM\x03\x02\x02\x02\u0160\u0161" +
		"\t\n\x02\x02\u0161O\x03\x02\x02\x02\u0162\u0163\t\v\x02\x02\u0163Q\x03" +
		"\x02\x02\x02\u0164\u0165\t\f\x02\x02\u0165S\x03\x02\x02\x02\u0166\u0167" +
		"\t\r\x02\x02\u0167U\x03\x02\x02\x02\u0168\u0169\x07H\x02\x02\u0169W\x03" +
		"\x02\x02\x02\x1C_afsz|\x84\x86\x8F\x91\xAC\xB7\xC2\xD2\xDA\xDC\xDE\xE4" +
		"\xEC\u011D\u0126\u012B\u0130\u0134\u014C\u015C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JabutiGrammarParser.__ATN) {
			JabutiGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JabutiGrammarParser._serializedATN));
		}

		return JabutiGrammarParser.__ATN;
	}

}

export class ContractContext extends ParserRuleContext {
	public Contract(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Contract, 0); }
	public variableName(): VariableNameContext | undefined {
		return this.tryGetRuleContext(0, VariableNameContext);
	}
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.CloseBrace, 0); }
	public variables(): VariablesContext[];
	public variables(i: number): VariablesContext;
	public variables(i?: number): VariablesContext | VariablesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariablesContext);
		} else {
			return this.getRuleContext(i, VariablesContext);
		}
	}
	public dates(): DatesContext[];
	public dates(i: number): DatesContext;
	public dates(i?: number): DatesContext | DatesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DatesContext);
		} else {
			return this.getRuleContext(i, DatesContext);
		}
	}
	public parties(): PartiesContext[];
	public parties(i: number): PartiesContext;
	public parties(i?: number): PartiesContext | PartiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartiesContext);
		} else {
			return this.getRuleContext(i, PartiesContext);
		}
	}
	public clauses(): ClausesContext[];
	public clauses(i: number): ClausesContext;
	public clauses(i?: number): ClausesContext | ClausesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClausesContext);
		} else {
			return this.getRuleContext(i, ClausesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_contract; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterContract) {
			listener.enterContract(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitContract) {
			listener.exitContract(this);
		}
	}
}


export class VariablesContext extends ParserRuleContext {
	public Variables(): TerminalNode { return this.getToken(JabutiGrammarParser.Variables, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenBrace, 0); }
	public variableName(): VariableNameContext {
		return this.getRuleContext(0, VariableNameContext);
	}
	public Assign(): TerminalNode { return this.getToken(JabutiGrammarParser.Assign, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseBrace, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.StringLiteral, 0); }
	public Digit(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Digit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_variables; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterVariables) {
			listener.enterVariables(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitVariables) {
			listener.exitVariables(this);
		}
	}
}


export class VariableNameContext extends ParserRuleContext {
	public Word(): TerminalNode[];
	public Word(i: number): TerminalNode;
	public Word(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JabutiGrammarParser.Word);
		} else {
			return this.getToken(JabutiGrammarParser.Word, i);
		}
	}
	public Under(): TerminalNode[];
	public Under(i: number): TerminalNode;
	public Under(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JabutiGrammarParser.Under);
		} else {
			return this.getToken(JabutiGrammarParser.Under, i);
		}
	}
	public Digit(): TerminalNode[];
	public Digit(i: number): TerminalNode;
	public Digit(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JabutiGrammarParser.Digit);
		} else {
			return this.getToken(JabutiGrammarParser.Digit, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_variableName; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterVariableName) {
			listener.enterVariableName(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitVariableName) {
			listener.exitVariableName(this);
		}
	}
}


export class DatesContext extends ParserRuleContext {
	public Dates(): TerminalNode { return this.getToken(JabutiGrammarParser.Dates, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseBrace, 0); }
	public beginDate(): BeginDateContext[];
	public beginDate(i: number): BeginDateContext;
	public beginDate(i?: number): BeginDateContext | BeginDateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BeginDateContext);
		} else {
			return this.getRuleContext(i, BeginDateContext);
		}
	}
	public dueDate(): DueDateContext[];
	public dueDate(i: number): DueDateContext;
	public dueDate(i?: number): DueDateContext | DueDateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DueDateContext);
		} else {
			return this.getRuleContext(i, DueDateContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_dates; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterDates) {
			listener.enterDates(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitDates) {
			listener.exitDates(this);
		}
	}
}


export class PartiesContext extends ParserRuleContext {
	public Parties(): TerminalNode { return this.getToken(JabutiGrammarParser.Parties, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseBrace, 0); }
	public application(): ApplicationContext[];
	public application(i: number): ApplicationContext;
	public application(i?: number): ApplicationContext | ApplicationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ApplicationContext);
		} else {
			return this.getRuleContext(i, ApplicationContext);
		}
	}
	public process(): ProcessContext[];
	public process(i: number): ProcessContext;
	public process(i?: number): ProcessContext | ProcessContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcessContext);
		} else {
			return this.getRuleContext(i, ProcessContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_parties; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterParties) {
			listener.enterParties(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitParties) {
			listener.exitParties(this);
		}
	}
}


export class ClausesContext extends ParserRuleContext {
	public Clauses(): TerminalNode { return this.getToken(JabutiGrammarParser.Clauses, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseBrace, 0); }
	public right(): RightContext[];
	public right(i: number): RightContext;
	public right(i?: number): RightContext | RightContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RightContext);
		} else {
			return this.getRuleContext(i, RightContext);
		}
	}
	public prohibition(): ProhibitionContext[];
	public prohibition(i: number): ProhibitionContext;
	public prohibition(i?: number): ProhibitionContext | ProhibitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProhibitionContext);
		} else {
			return this.getRuleContext(i, ProhibitionContext);
		}
	}
	public obligation(): ObligationContext[];
	public obligation(i: number): ObligationContext;
	public obligation(i?: number): ObligationContext | ObligationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObligationContext);
		} else {
			return this.getRuleContext(i, ObligationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_clauses; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterClauses) {
			listener.enterClauses(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitClauses) {
			listener.exitClauses(this);
		}
	}
}


export class BeginDateContext extends ParserRuleContext {
	public BeginDate(): TerminalNode { return this.getToken(JabutiGrammarParser.BeginDate, 0); }
	public Assign(): TerminalNode { return this.getToken(JabutiGrammarParser.Assign, 0); }
	public dateOrDatetime(): DateOrDatetimeContext {
		return this.getRuleContext(0, DateOrDatetimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_beginDate; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterBeginDate) {
			listener.enterBeginDate(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitBeginDate) {
			listener.exitBeginDate(this);
		}
	}
}


export class DueDateContext extends ParserRuleContext {
	public DueDate(): TerminalNode { return this.getToken(JabutiGrammarParser.DueDate, 0); }
	public Assign(): TerminalNode { return this.getToken(JabutiGrammarParser.Assign, 0); }
	public dateOrDatetime(): DateOrDatetimeContext {
		return this.getRuleContext(0, DateOrDatetimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_dueDate; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterDueDate) {
			listener.enterDueDate(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitDueDate) {
			listener.exitDueDate(this);
		}
	}
}


export class ApplicationContext extends ParserRuleContext {
	public Application(): TerminalNode { return this.getToken(JabutiGrammarParser.Application, 0); }
	public Assign(): TerminalNode { return this.getToken(JabutiGrammarParser.Assign, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(JabutiGrammarParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_application; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterApplication) {
			listener.enterApplication(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitApplication) {
			listener.exitApplication(this);
		}
	}
}


export class ProcessContext extends ParserRuleContext {
	public Process(): TerminalNode { return this.getToken(JabutiGrammarParser.Process, 0); }
	public Assign(): TerminalNode { return this.getToken(JabutiGrammarParser.Assign, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(JabutiGrammarParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_process; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterProcess) {
			listener.enterProcess(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitProcess) {
			listener.exitProcess(this);
		}
	}
}


export class RightContext extends ParserRuleContext {
	public Right(): TerminalNode { return this.getToken(JabutiGrammarParser.Right, 0); }
	public Word(): TerminalNode { return this.getToken(JabutiGrammarParser.Word, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenBrace, 0); }
	public rolePlayer(): RolePlayerContext {
		return this.getRuleContext(0, RolePlayerContext);
	}
	public operation(): OperationContext {
		return this.getRuleContext(0, OperationContext);
	}
	public terms(): TermsContext {
		return this.getRuleContext(0, TermsContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseBrace, 0); }
	public onBreach(): OnBreachContext | undefined {
		return this.tryGetRuleContext(0, OnBreachContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_right; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterRight) {
			listener.enterRight(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitRight) {
			listener.exitRight(this);
		}
	}
}


export class ProhibitionContext extends ParserRuleContext {
	public Prohibition(): TerminalNode { return this.getToken(JabutiGrammarParser.Prohibition, 0); }
	public Word(): TerminalNode { return this.getToken(JabutiGrammarParser.Word, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenBrace, 0); }
	public rolePlayer(): RolePlayerContext {
		return this.getRuleContext(0, RolePlayerContext);
	}
	public operation(): OperationContext {
		return this.getRuleContext(0, OperationContext);
	}
	public terms(): TermsContext {
		return this.getRuleContext(0, TermsContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseBrace, 0); }
	public onBreach(): OnBreachContext | undefined {
		return this.tryGetRuleContext(0, OnBreachContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_prohibition; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterProhibition) {
			listener.enterProhibition(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitProhibition) {
			listener.exitProhibition(this);
		}
	}
}


export class ObligationContext extends ParserRuleContext {
	public Obligation(): TerminalNode { return this.getToken(JabutiGrammarParser.Obligation, 0); }
	public Word(): TerminalNode { return this.getToken(JabutiGrammarParser.Word, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenBrace, 0); }
	public rolePlayer(): RolePlayerContext {
		return this.getRuleContext(0, RolePlayerContext);
	}
	public operation(): OperationContext {
		return this.getRuleContext(0, OperationContext);
	}
	public terms(): TermsContext {
		return this.getRuleContext(0, TermsContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseBrace, 0); }
	public onBreach(): OnBreachContext | undefined {
		return this.tryGetRuleContext(0, OnBreachContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_obligation; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterObligation) {
			listener.enterObligation(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitObligation) {
			listener.exitObligation(this);
		}
	}
}


export class RolePlayerContext extends ParserRuleContext {
	public RolePlayer(): TerminalNode { return this.getToken(JabutiGrammarParser.RolePlayer, 0); }
	public Assign(): TerminalNode { return this.getToken(JabutiGrammarParser.Assign, 0); }
	public Process(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Process, 0); }
	public Application(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Application, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_rolePlayer; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterRolePlayer) {
			listener.enterRolePlayer(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitRolePlayer) {
			listener.exitRolePlayer(this);
		}
	}
}


export class OperationContext extends ParserRuleContext {
	public Operation(): TerminalNode { return this.getToken(JabutiGrammarParser.Operation, 0); }
	public Assign(): TerminalNode { return this.getToken(JabutiGrammarParser.Assign, 0); }
	public Push(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Push, 0); }
	public Poll(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Poll, 0); }
	public Read(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Read, 0); }
	public Write(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Write, 0); }
	public Request(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Request, 0); }
	public Response(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Response, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_operation; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterOperation) {
			listener.enterOperation(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitOperation) {
			listener.exitOperation(this);
		}
	}
}


export class TermsContext extends ParserRuleContext {
	public Terms(): TerminalNode { return this.getToken(JabutiGrammarParser.Terms, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseBrace, 0); }
	public OpenParen(): TerminalNode[];
	public OpenParen(i: number): TerminalNode;
	public OpenParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JabutiGrammarParser.OpenParen);
		} else {
			return this.getToken(JabutiGrammarParser.OpenParen, i);
		}
	}
	public conditionalTermOrWhen(): ConditionalTermOrWhenContext[];
	public conditionalTermOrWhen(i: number): ConditionalTermOrWhenContext;
	public conditionalTermOrWhen(i?: number): ConditionalTermOrWhenContext | ConditionalTermOrWhenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalTermOrWhenContext);
		} else {
			return this.getRuleContext(i, ConditionalTermOrWhenContext);
		}
	}
	public Or(): TerminalNode[];
	public Or(i: number): TerminalNode;
	public Or(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JabutiGrammarParser.Or);
		} else {
			return this.getToken(JabutiGrammarParser.Or, i);
		}
	}
	public CloseParen(): TerminalNode[];
	public CloseParen(i: number): TerminalNode;
	public CloseParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JabutiGrammarParser.CloseParen);
		} else {
			return this.getToken(JabutiGrammarParser.CloseParen, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JabutiGrammarParser.Comma);
		} else {
			return this.getToken(JabutiGrammarParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_terms; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterTerms) {
			listener.enterTerms(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitTerms) {
			listener.exitTerms(this);
		}
	}
}


export class ConditionalTermOrWhenContext extends ParserRuleContext {
	public conditionalTerm(): ConditionalTermContext | undefined {
		return this.tryGetRuleContext(0, ConditionalTermContext);
	}
	public when(): WhenContext | undefined {
		return this.tryGetRuleContext(0, WhenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_conditionalTermOrWhen; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterConditionalTermOrWhen) {
			listener.enterConditionalTermOrWhen(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitConditionalTermOrWhen) {
			listener.exitConditionalTermOrWhen(this);
		}
	}
}


export class ConditionalTermContext extends ParserRuleContext {
	public maxNumberOfOperation(): MaxNumberOfOperationContext | undefined {
		return this.tryGetRuleContext(0, MaxNumberOfOperationContext);
	}
	public messageContent(): MessageContentContext | undefined {
		return this.tryGetRuleContext(0, MessageContentContext);
	}
	public weekDaysInterval(): WeekDaysIntervalContext | undefined {
		return this.tryGetRuleContext(0, WeekDaysIntervalContext);
	}
	public timeInterval(): TimeIntervalContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalContext);
	}
	public timeout(): TimeoutContext | undefined {
		return this.tryGetRuleContext(0, TimeoutContext);
	}
	public sessionInterval(): SessionIntervalContext | undefined {
		return this.tryGetRuleContext(0, SessionIntervalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_conditionalTerm; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterConditionalTerm) {
			listener.enterConditionalTerm(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitConditionalTerm) {
			listener.exitConditionalTerm(this);
		}
	}
}


export class SessionIntervalContext extends ParserRuleContext {
	public SessionInterval(): TerminalNode { return this.getToken(JabutiGrammarParser.SessionInterval, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenParen, 0); }
	public Digit(): TerminalNode { return this.getToken(JabutiGrammarParser.Digit, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseParen, 0); }
	public Second(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Second, 0); }
	public Minute(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Minute, 0); }
	public Day(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Day, 0); }
	public Week(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Week, 0); }
	public Month(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Month, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_sessionInterval; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterSessionInterval) {
			listener.enterSessionInterval(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitSessionInterval) {
			listener.exitSessionInterval(this);
		}
	}
}


export class WhenContext extends ParserRuleContext {
	public When(): TerminalNode { return this.getToken(JabutiGrammarParser.When, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenParen, 0); }
	public conditionalTerm(): ConditionalTermContext[];
	public conditionalTerm(i: number): ConditionalTermContext;
	public conditionalTerm(i?: number): ConditionalTermContext | ConditionalTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalTermContext);
		} else {
			return this.getRuleContext(i, ConditionalTermContext);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseParen, 0); }
	public Do(): TerminalNode { return this.getToken(JabutiGrammarParser.Do, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_when; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterWhen) {
			listener.enterWhen(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitWhen) {
			listener.exitWhen(this);
		}
	}
}


export class TimeoutContext extends ParserRuleContext {
	public Timeout(): TerminalNode { return this.getToken(JabutiGrammarParser.Timeout, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenParen, 0); }
	public Digit(): TerminalNode { return this.getToken(JabutiGrammarParser.Digit, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_timeout; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterTimeout) {
			listener.enterTimeout(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitTimeout) {
			listener.exitTimeout(this);
		}
	}
}


export class TimeIntervalContext extends ParserRuleContext {
	public TimeInterval(): TerminalNode { return this.getToken(JabutiGrammarParser.TimeInterval, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenParen, 0); }
	public time(): TimeContext[];
	public time(i: number): TimeContext;
	public time(i?: number): TimeContext | TimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeContext);
		} else {
			return this.getRuleContext(i, TimeContext);
		}
	}
	public To(): TerminalNode { return this.getToken(JabutiGrammarParser.To, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_timeInterval; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterTimeInterval) {
			listener.enterTimeInterval(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitTimeInterval) {
			listener.exitTimeInterval(this);
		}
	}
}


export class WeekDaysContext extends ParserRuleContext {
	public Monday(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Monday, 0); }
	public Tuesday(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Tuesday, 0); }
	public Wednesday(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Wednesday, 0); }
	public Thursday(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Thursday, 0); }
	public Friday(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Friday, 0); }
	public Saturday(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Saturday, 0); }
	public Sunday(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Sunday, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_weekDays; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterWeekDays) {
			listener.enterWeekDays(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitWeekDays) {
			listener.exitWeekDays(this);
		}
	}
}


export class WeekDaysIntervalContext extends ParserRuleContext {
	public WeekDaysInterval(): TerminalNode { return this.getToken(JabutiGrammarParser.WeekDaysInterval, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenParen, 0); }
	public weekDays(): WeekDaysContext[];
	public weekDays(i: number): WeekDaysContext;
	public weekDays(i?: number): WeekDaysContext | WeekDaysContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WeekDaysContext);
		} else {
			return this.getRuleContext(i, WeekDaysContext);
		}
	}
	public To(): TerminalNode { return this.getToken(JabutiGrammarParser.To, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_weekDaysInterval; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterWeekDaysInterval) {
			listener.enterWeekDaysInterval(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitWeekDaysInterval) {
			listener.exitWeekDaysInterval(this);
		}
	}
}


export class MaxNumberOfOperationContext extends ParserRuleContext {
	public MaxNumberOfOperation(): TerminalNode { return this.getToken(JabutiGrammarParser.MaxNumberOfOperation, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenParen, 0); }
	public Digit(): TerminalNode { return this.getToken(JabutiGrammarParser.Digit, 0); }
	public Per(): TerminalNode { return this.getToken(JabutiGrammarParser.Per, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseParen, 0); }
	public Second(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Second, 0); }
	public Hour(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Hour, 0); }
	public Minute(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Minute, 0); }
	public Day(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Day, 0); }
	public Week(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Week, 0); }
	public Month(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Month, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_maxNumberOfOperation; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterMaxNumberOfOperation) {
			listener.enterMaxNumberOfOperation(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitMaxNumberOfOperation) {
			listener.exitMaxNumberOfOperation(this);
		}
	}
}


export class MessageContentContext extends ParserRuleContext {
	public MessageContent(): TerminalNode { return this.getToken(JabutiGrammarParser.MessageContent, 0); }
	public OpenParen(): TerminalNode { return this.getToken(JabutiGrammarParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(JabutiGrammarParser.CloseParen, 0); }
	public messageContentNumeric(): MessageContentNumericContext | undefined {
		return this.tryGetRuleContext(0, MessageContentNumericContext);
	}
	public messageContentString(): MessageContentStringContext | undefined {
		return this.tryGetRuleContext(0, MessageContentStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_messageContent; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterMessageContent) {
			listener.enterMessageContent(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitMessageContent) {
			listener.exitMessageContent(this);
		}
	}
}


export class MessageContentNumericContext extends ParserRuleContext {
	public variableName(): VariableNameContext {
		return this.getRuleContext(0, VariableNameContext);
	}
	public Digit(): TerminalNode { return this.getToken(JabutiGrammarParser.Digit, 0); }
	public equal(): EqualContext | undefined {
		return this.tryGetRuleContext(0, EqualContext);
	}
	public notEqual(): NotEqualContext | undefined {
		return this.tryGetRuleContext(0, NotEqualContext);
	}
	public greaterThan(): GreaterThanContext | undefined {
		return this.tryGetRuleContext(0, GreaterThanContext);
	}
	public lassThan(): LassThanContext | undefined {
		return this.tryGetRuleContext(0, LassThanContext);
	}
	public Per(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Per, 0); }
	public Second(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Second, 0); }
	public Hour(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Hour, 0); }
	public Minute(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Minute, 0); }
	public Day(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Day, 0); }
	public Week(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Week, 0); }
	public Month(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.Month, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_messageContentNumeric; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterMessageContentNumeric) {
			listener.enterMessageContentNumeric(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitMessageContentNumeric) {
			listener.exitMessageContentNumeric(this);
		}
	}
}


export class MessageContentStringContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JabutiGrammarParser.StringLiteral);
		} else {
			return this.getToken(JabutiGrammarParser.StringLiteral, i);
		}
	}
	public equal(): EqualContext | undefined {
		return this.tryGetRuleContext(0, EqualContext);
	}
	public notEqual(): NotEqualContext | undefined {
		return this.tryGetRuleContext(0, NotEqualContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_messageContentString; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterMessageContentString) {
			listener.enterMessageContentString(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitMessageContentString) {
			listener.exitMessageContentString(this);
		}
	}
}


export class EqualContext extends ParserRuleContext {
	public Assign(): TerminalNode[];
	public Assign(i: number): TerminalNode;
	public Assign(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JabutiGrammarParser.Assign);
		} else {
			return this.getToken(JabutiGrammarParser.Assign, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_equal; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterEqual) {
			listener.enterEqual(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitEqual) {
			listener.exitEqual(this);
		}
	}
}


export class NotEqualContext extends ParserRuleContext {
	public Exclamation(): TerminalNode { return this.getToken(JabutiGrammarParser.Exclamation, 0); }
	public Assign(): TerminalNode { return this.getToken(JabutiGrammarParser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_notEqual; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterNotEqual) {
			listener.enterNotEqual(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitNotEqual) {
			listener.exitNotEqual(this);
		}
	}
}


export class GreaterThanContext extends ParserRuleContext {
	public Greater(): TerminalNode { return this.getToken(JabutiGrammarParser.Greater, 0); }
	public Assign(): TerminalNode { return this.getToken(JabutiGrammarParser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_greaterThan; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterGreaterThan) {
			listener.enterGreaterThan(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitGreaterThan) {
			listener.exitGreaterThan(this);
		}
	}
}


export class LassThanContext extends ParserRuleContext {
	public Lass(): TerminalNode { return this.getToken(JabutiGrammarParser.Lass, 0); }
	public Assign(): TerminalNode { return this.getToken(JabutiGrammarParser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_lassThan; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterLassThan) {
			listener.enterLassThan(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitLassThan) {
			listener.exitLassThan(this);
		}
	}
}


export class OnBreachContext extends ParserRuleContext {
	public OnBreach(): TerminalNode { return this.getToken(JabutiGrammarParser.OnBreach, 0); }
	public OpenParen(): TerminalNode[];
	public OpenParen(i: number): TerminalNode;
	public OpenParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JabutiGrammarParser.OpenParen);
		} else {
			return this.getToken(JabutiGrammarParser.OpenParen, i);
		}
	}
	public Log(): TerminalNode { return this.getToken(JabutiGrammarParser.Log, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(JabutiGrammarParser.StringLiteral, 0); }
	public CloseParen(): TerminalNode[];
	public CloseParen(i: number): TerminalNode;
	public CloseParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JabutiGrammarParser.CloseParen);
		} else {
			return this.getToken(JabutiGrammarParser.CloseParen, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_onBreach; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterOnBreach) {
			listener.enterOnBreach(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitOnBreach) {
			listener.exitOnBreach(this);
		}
	}
}


export class DateOrDatetimeContext extends ParserRuleContext {
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public datetime(): DatetimeContext | undefined {
		return this.tryGetRuleContext(0, DatetimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_dateOrDatetime; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterDateOrDatetime) {
			listener.enterDateOrDatetime(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitDateOrDatetime) {
			listener.exitDateOrDatetime(this);
		}
	}
}


export class DatetimeContext extends ParserRuleContext {
	public date(): DateContext {
		return this.getRuleContext(0, DateContext);
	}
	public time(): TimeContext {
		return this.getRuleContext(0, TimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_datetime; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterDatetime) {
			listener.enterDatetime(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitDatetime) {
			listener.exitDatetime(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public year(): YearContext {
		return this.getRuleContext(0, YearContext);
	}
	public month(): MonthContext {
		return this.getRuleContext(0, MonthContext);
	}
	public day(): DayContext {
		return this.getRuleContext(0, DayContext);
	}
	public Divide(): TerminalNode[];
	public Divide(i: number): TerminalNode;
	public Divide(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JabutiGrammarParser.Divide);
		} else {
			return this.getToken(JabutiGrammarParser.Divide, i);
		}
	}
	public Minus(): TerminalNode[];
	public Minus(i: number): TerminalNode;
	public Minus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JabutiGrammarParser.Minus);
		} else {
			return this.getToken(JabutiGrammarParser.Minus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_date; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterDate) {
			listener.enterDate(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitDate) {
			listener.exitDate(this);
		}
	}
}


export class TimeContext extends ParserRuleContext {
	public hour(): HourContext {
		return this.getRuleContext(0, HourContext);
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JabutiGrammarParser.Colon);
		} else {
			return this.getToken(JabutiGrammarParser.Colon, i);
		}
	}
	public minute(): MinuteContext {
		return this.getRuleContext(0, MinuteContext);
	}
	public second(): SecondContext | undefined {
		return this.tryGetRuleContext(0, SecondContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_time; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterTime) {
			listener.enterTime(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitTime) {
			listener.exitTime(this);
		}
	}
}


export class SecondContext extends ParserRuleContext {
	public N00_09(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N00_09, 0); }
	public N10_12(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N10_12, 0); }
	public N13_24(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N13_24, 0); }
	public N25_29(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N25_29, 0); }
	public N30_31(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N30_31, 0); }
	public N32_59(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N32_59, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_second; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterSecond) {
			listener.enterSecond(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitSecond) {
			listener.exitSecond(this);
		}
	}
}


export class MinuteContext extends ParserRuleContext {
	public N00_09(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N00_09, 0); }
	public N10_12(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N10_12, 0); }
	public N13_24(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N13_24, 0); }
	public N25_29(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N25_29, 0); }
	public N30_31(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N30_31, 0); }
	public N32_59(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N32_59, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_minute; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterMinute) {
			listener.enterMinute(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitMinute) {
			listener.exitMinute(this);
		}
	}
}


export class HourContext extends ParserRuleContext {
	public N00_09(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N00_09, 0); }
	public N10_12(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N10_12, 0); }
	public N13_24(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N13_24, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_hour; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterHour) {
			listener.enterHour(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitHour) {
			listener.exitHour(this);
		}
	}
}


export class DayContext extends ParserRuleContext {
	public N00_09(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N00_09, 0); }
	public N10_12(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N10_12, 0); }
	public N13_24(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N13_24, 0); }
	public N25_29(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N25_29, 0); }
	public N30_31(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N30_31, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_day; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterDay) {
			listener.enterDay(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitDay) {
			listener.exitDay(this);
		}
	}
}


export class MonthContext extends ParserRuleContext {
	public N00_09(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N00_09, 0); }
	public N10_12(): TerminalNode | undefined { return this.tryGetToken(JabutiGrammarParser.N10_12, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_month; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterMonth) {
			listener.enterMonth(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitMonth) {
			listener.exitMonth(this);
		}
	}
}


export class YearContext extends ParserRuleContext {
	public Digit(): TerminalNode { return this.getToken(JabutiGrammarParser.Digit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JabutiGrammarParser.RULE_year; }
	// @Override
	public enterRule(listener: JabutiGrammarListener): void {
		if (listener.enterYear) {
			listener.enterYear(this);
		}
	}
	// @Override
	public exitRule(listener: JabutiGrammarListener): void {
		if (listener.exitYear) {
			listener.exitYear(this);
		}
	}
}


