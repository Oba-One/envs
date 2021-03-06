import { CompilerContext, Compiler, ActionReturnType } from '@bit/bit.envs.common.compiler-types';
import Vinyl from 'vinyl';

export type TesterOutput = TestResult[];
export interface TesterContext extends CompilerContext {
  testFiles: Array<Vinyl>;
}

export interface TestResult {
  title: string;
  fullTitle: string;
  duration: number | undefined;
  currentRetry: number;
  err: object;
}
