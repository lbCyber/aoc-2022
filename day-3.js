const input = [
  "WwcsbsWwspmFTGVV",
  "RHtMDHdSMnDBGMSDvnvDjtmpTpjTFggpmjmTFggTjmpP",
  "vtCSGRMBDzHddvBHBzRhrlcZhlLzWNlqblhzcr",
  "shhszHNHHZWqSzVNdClMjlFjBBbNTB",
  "tQQGmnrMnJnGfmvrRRPCjlbljFBdjFCjTjnP",
  "mRwtfGrMmJtwRDvQJQrJpMLSzVDHzhzHZqZzqSzcWVWH",
  "WsWWgrtgsrhTQtsFcWPcRMCCTvqvMvqNNqMMHlMq",
  "bBJrBGbzzLJznJrbSDGGJLqmlvqMqvlmLHRqRZZRNZ",
  "bzJfDGVSzVrJGwjVGPPpQthdPsPpjdphsc",
  "pJpCCBSWlczWWBWMHdMmMsFmpddrgF",
  "wfVqZZGVQvzsMqmMgHjm",
  "vDZGvPttQTVtGDQDDDGwbSCcSJSCJWTcRRSRczRJ",
  "HLVHsVWLwbWswbpWFWrrmThfTPNnhNSDDNhDfznTnhnS",
  "pBRcvGvvBtpGcqqQvgcphPfzfDGhzdzPDzDDhnhS",
  "ZQRvqBptjJgZCtJqqMMMLHWwMWZWHHFFHm",
  "PvPFPvLLLSvNFvQNWNPvrPLrZjwhMttTwtTtQZBwqjqtZqwM",
  "HJDDbHjgppzCDCmzpgzsGbCsTMZqZllqhJBhMTtVBBhMtMth",
  "zgGncmGGzHCnHDpDgDCGsmFLLPFjPRRWLRjdcjrcdRLd",
  "zHnWzntnBRWTSBzRBddpFvZVcHpLFvjvLppvHP",
  "MmmWmNGQhbCpZVLLbccvpj",
  "QDMCGrNWfwNznBJsJzDBdg",
  "tcRcZccZmdZJctRcjrlhNNDfrdNdSfNsNT",
  "QHQpBVvMpRMwgBgvnHRFlhrSsgNFThgTFFflNS",
  "vvHpVBBBGBppHvpLvHGbjmmtCqWLJJZRzZZZZb",
  "ZBtTDZRWsTsDZVWVZDmjpbLbpSSzmLpWrbrS",
  "MFNNFvvwFHwlhmNrCStLNtjzrb",
  "vwffwcHwflGqGflHJfDBBZtQVBgZQJtBBsnT",
  "pTJcmMJTspmpMZZJJZHCQQMzPBlQdWWWFzWP",
  "LDnwrdnDnqjfqgvfDjrfFlBBPFHFSHPQCBvQSSWB",
  "nLbjgLjdbrwVRcppsscJVRRR",
  "mHnfggmMtpHPPBCs",
  "PJjlQQRrJhJNPPTtBsCbCCTlpptd",
  "rSSDhNQwShRRjhmMPmzMDfPmfLzL",
  "HzLFBgrCthtFrrhFSCCCvBQNRVmJJJmnpnddmppddVtJ",
  "MPZsjDWPjZsVzNTzpVdRdZ",
  "qMfjWfwclsPsjwzqHgLFhwGFwHrFFrSC",
  "llllmSbhNmSbNzlPmRNCcgLLchHHpTGsCTQGpT",
  "dVjBrvBBVLJQsLpC",
  "frZBWBDMFndStFsSwzlPlq",
  "vmTVVtmJHwCwDllttTsrcPcMrfqPMMpjMq",
  "LQGBRgGGRNgGgBhgzHfpjPqsMjpLcLjrPLpq",
  "BdgzgSRGBnNHJtJlVStVmt",
  "FbDQsFjPVHFZFSbrVjSVvMJlGBJhDcqBBllJGccJnh",
  "RfTCTTpmppfgwCpwpLwRMnMGMlcPGqhddPcJnl",
  "zgLPLNCCpLggzmTzTWmVrjVvrNvjjjvbVHQZZH",
  "RBjjpwmRszBdvhLdSvpVpV",
  "GrbfbJWmQJGWrGZZQMbSLggfCgSHhCSgShghSC",
  "DWNDZQcrbWQrZJZGQQZPsztzBsPmBTzwcwRwjT",
  "rlvgglvZqbrbWbWWdvdmPHBBNMNJGqjGRRnHnPBJ",
  "cDFDcfcCDhLzsCfLDVpGPRJMPsRJMPNRnjHHGJ",
  "DCfMVDFVScVMVQlgmZgdmWQQmS",
  "nWTWWgwNgGDdBZBVcvDzzJccVlCzHD",
  "RLppMMLpRqfMtMjtMCHJFSpzHSvSpczJdl",
  "RdLRbQRjsRMrMRRMfbQLqPjbmnQgQWWwZmggnNTgnnWwhBhn",
  "TmzjMjrmjmjBmHLvGPpbvWGqJzJJ",
  "CfScwNDssDVCccdNVcNDQfbqJLqSLPpJpJJvJPpGTWJb",
  "nddCQTfQVVrHmjMnrMFM",
  "WHDnTwvwcwZmWwQTnBtgbVLLbgfSlTfrfb",
  "CPPGdJRzNhNpzPJtMgBLbgtlLLfLMz",
  "GJptpdFRhJwDmFHDjvnD",
  "PNcWDNnNDcLjDDcSRWtQFfzzzQgPgsssZtPZ",
  "MGhJRJGGrlpVGVHVCqqGqBQvzFzFfBvZvvtZtvFzvZvQ",
  "JmJplCrlMNdmjbNbWR",
  "pqpqFJPPSswJshNghg",
  "zTHHrrbLzDQHccfhqmDshgCwfmqm",
  "rtqqtTTHtzGLPWBdnGBSWGSS",
  "gmNvgVqjjqzfMRgrRtPcft",
  "WswSQwWWHGCsHQhlGGLLJRbLMRfRGcMb",
  "dQCRCWhhwCwFwQshhRTmmBmFjFTTVNpqTnTj",
  "FZvqSWqjjZvvrNSvbblcbslDppDHbcsS",
  "MmwLTwPmBwmLJJmLlWzWnDllHcHzcDHM",
  "QRwtQtLTwwQBTPfFfZdFvqqrFGWjrh",
  "MqlnnNvJJZnNNdJZZLvLJnMzjjCTCChgWjccWqcjhcgcWR",
  "tbddSHDBbHgHhHTCjh",
  "mffBfbpsFSdQQDbQsrlJvwJNLLJMrrlsJr",
  "RjqbNRRbDDqHndbcHDqdRHcChsffCQJJssZGpzpCpJphJd",
  "VrMmSbrWVMtMtLmQGCfZWJZCfpZfJW",
  "PgSPgTvSSHjjBbvbvq",
  "whclNQQfcCFCcrJRjmmHNWsmLs",
  "PPzMbqBPLVtnTppPTPzHJrGWJRRvsjjjRHssRb",
  "PtgPVZTtTLMtBzqPqttPVMClcdDcgCCfCQDSdSgCwlhh",
  "DrcrsvcNtLWSFPSFszbM",
  "HqTdHJdQhGJBHQHWWDTnnPzbMMzPnS",
  "hdwfqdhQJfjlccrfvNDLfl",
  "BBPCWvjvTLrHTHHPCTndfwhbdnnZZfDhJwfJVb",
  "msmgNMMcgmgczlmmgQNlddpVDDZpZpDfhZfJwsJF",
  "mmQmMgSgzmqSRllGmgjPHrvvwHttjLrLRWWB",
  "RwvDvhjhMvwlFNwNwCWCCWWLZcbGGZLGJVrppbZVcjmpmJ",
  "tfnfsStnPPfTfgnPSSzPflJZZZrlZJVzLLmZJrzVmG",
  "nPHqgfsHQnffqgSTldHTPnPHWMRFFqqFhNNNCwNCFMMhDMhh",
  "FmwFHmnlGJfnlSlmrfsSvWgZNWNvLvtqLqDJhWJD",
  "BVVTTMqRWvRZRbhW",
  "pMBPCzVPQcQsGqSFmPFwSF",
  "TcpTpwqZqMpZqlZCpZlwDjjcPNdgdPjHHHdvhHQgvv",
  "zQFBRbmsQbLLBnGBvFdPghddNgHjNSSj",
  "QnszWVzLfsLGbnGQbwpVtMrwZTqpCqpppr",
  "WrZmrJcGwZdGZZmHdJcwGWcZsdFFLqTtLVtSTLtvvLtLLqSs",
  "fnpCCQClfpQlzbbpQpflBpjhLVSTvFhjqtstVsjtstFVMs",
  "QBQRnbCRpnPngnbggCzzRClZwJHFHDwZJPJGWHwmNGHPZr",
  "fDhjvftQtDwgPhdRcRRP",
  "bbNSgllVNMCWVnbWmcdFdmmFdpFpRrPPPw",
  "NBzBglNzBvvGZDJQ",
  "rGbbtStjSdbGtDpjjJbbRRbdrcCsCCrFqhllrFHsFsCvqCWH",
  "TzgMMgmTVgzzTMLLfMHvTFsFCqHTvFsTvshF",
  "gLMPBgQmQmNzVZLPzPppjbRhhddGBGSttbpR",
  "zMJTpMzpVczHbCzVJVFCpJPngnBqVZqsRZZPnjqRgmjR",
  "wttwNdfLQwLhwhhDDhWvgRmnPqsQqjnBPSZRgjPS",
  "DdLwGGvNvhlvrrMFlFTcZrpC",
  "llBQWMScQlSSBjMrvrrPpFHFBDFDFJTmTtFFmF",
  "nzZzfVgzCNtnJppDHPnPpp",
  "LdRNfVdzbzCCjcvllMcsbtjj",
  "pWFwpFhprTnFfWwZrsBDmsqBvZvjjv",
  "VbcHCthtzQtNqBsvsZvQmQsj",
  "cltzzVcJSMtRWdhJLhRwdh",
  "lmmmLRdZnjBlGgVhNSVvRMWN",
  "bDwCqCGPbwpPwDPPpCpqpPbScvMSMSDWgVcSShNNVfgWWv",
  "bTpzqJHPFFJqbTHswLlGlBntGnjQtGBZTT",
  "pVjVlDDhmRPlHlHPWzWVWrVrcWztVdzv",
  "GCqGGGJSFbnLJLLfrLfPrLdgrrgfWd",
  "PbJSQGSsGnbMbqSFGBMMbsGTNwpTRwppDRsjwlNpsmHwDl",
  "GcnPbbbLqDPDBPPDlQ",
  "JtTChNfRpNJMTCfMTlJVsdVHvDddHBVmQm",
  "TzlffWNfjTfjjCjfTtRrLgbnbbnSSwbnLzZZzr",
  "hggWzjLhzhLhjzVWgpCpTFFHtCJFTJTHHHdG",
  "lvSBvNNSNSSmlbwmMJCGtJQCHmdT",
  "cfSlSSlvBDBPnlPPDZLsgtggZZVVfhzRgV",
  "gGVJGvVVZZLvQLWQppccpctpNptMhnhSjjnM",
  "fzQBsBzmwPzdQrRbSFNFnsSDchjnFhMN",
  "bCwQRbbCJvlGCHgL",
  "NMgdHVSqgQcVHmlllLDjlCLdjL",
  "whTRJtJTnthWBlLLLmlFtVmV",
  "wRhnGTpzzTRnVbzzWWbJwbhNQrZHfpNgMQpfZQHHNZZHHQ",
  "qNNlMdbNrlVsQQfswQNCmW",
  "LJzBvSdLSHpDJzzzHJnHnzFQCCmmswmfwBGhsQfWfCwW",
  "HzSvHppDDRvgHzzcnqTrTtllZdRrbRVVZZ",
  "TWVVVFVPpjVFtRfPBmmzMMPCvmLm",
  "hDDrwndQQbbhZDMSMvcflMLmfnBL",
  "grdggqsbrhdJJJrhbwbbsZGHVNHtTWpVBFVTTTVTHtNg",
  "tLbvnTCzCVnzzwVTJVlwltMFvQFQRFFrQPBFdNgrMBNF",
  "pShsqqmGjZfZccsqSfbdNBMMRQGBPgMdPMPF",
  "HhspDpjhSjbcSmcqhZDcZZjTttLVwlTJJVWtnWVlWHCltL",
  "DwQBvwBnBrSVRrZM",
  "JWWGRssgRsFgzsFPJrNHVMHrlVrPSMNjHH",
  "gspgFzRCFWLJpgqqRWgqpCJwnQCnhQvwcTdcdddnwbDfhf",
  "fMMCwFDGNNMTdTDLlVlZZmdZBdBtVr",
  "jjpjtbpRcPvSPnPnpPnvPPPnbZlmrWmLWHmHBWHlrmrmlZWl",
  "jqjjnPqngtQfGFftFq",
  "qnzhhbzzqGgsqGtnwcJrlCMlCjvcCCcrCRrvCv",
  "mVSNZdTQdVVWmVFHQrpCjpjDRvjMRjdLRt",
  "WBHZTHHTFWWNNBNHQTZPsPggghfgsnsgsffthszJ",
  "sDwpdMgvHrZgwbdggzZZgPhFNFFcjPPqhLhjMlPqLq",
  "JffJfnJGtBtCQQRBJZTQJJGfcNjqCLcFhFWCPLjhFLPjcPhl",
  "VZZVmtGQQZmHrwgddppb",
  "NNNlpjbVpGglNbvpTwBQQvfWvfBrWvBW",
  "JthDJsLhhHPcGcqPshJsshSBwCWwfWSLCfSfSSRBrfWB",
  "dhDtZqGmctZDtZHqDGVgVgNbbbFjndMFNlFg",
  "jqDVzzDMdDwsVQLCZVCRWLGBQC",
  "bbHFbSSpFbFHJHStJNbtJprZlCGLQsLGZRBLRQLQpLBClZ",
  "SmFmTPJvFTNbmmsMdqqjscwz",
  "RqMbHGJRJpgJgGgQjgrLTrTzjcrTrrLg",
  "lwfwdhnflPlbCsVVjhCSbV",
  "fwnNtwmlFZpbFZtM",
  "QNSQrLTNrLNQRRrfHFrSjqhblWtSltqlWqtWWl",
  "DvgBgnzgcvVZMljv",
  "DGJdjBPDngDnDjBpBmFpTRmRFLRRmmCmHH",
  "dtgSdTqdlvdJJvFqTvSqJqqRMPBtLHPBnWbsbWbsbWtWtWHV",
  "DjfCfmcpNrwZQCmmNrDZNZNpsHLHWBBbHVVcGGGbHGBbMVMB",
  "fpNjCfzLNZjTllvzdSgFgJ",
  "nHBfZmHTRwsZffjBnHfmRZHtLtdNPPlWvddWLWJlJldCldLC",
  "zwrbphMMVFzMwdCWNPlCbPdDCD",
  "hccMSpqShMSrhZTBwmTqHjqZmf",
  "NJGGLwGsTSsNlJZhmtgCVlbWQWlQMtCbvb",
  "pDjppDBRdjzqpHqDSDzjVMCCrCrWtgQWdtdQQCdb",
  "fHpfRBPRzDpBFSqcSBRBSNhPNwwNNswJLhmmLNGJZL",
  "RZbsPgnVDzTJcdGjDGmD",
  "NwfQHQtpfppQhjVVjqVNJJTN",
  "tLLtwSptVCSWpvVtRnrbWbMgFPMsgZss",
  "VsQjSwwVSwsZzsvdscZvfrhPRpqBrBrbpzMrrTMh",
  "JtNDTmtGJTmLCGFDCHtDhMMBRhqqRbPrfrbNRrbR",
  "GDWLlDnFgZdTSTWv",
  "gfQHRRpQgRqNSBtjqwjztzjtnL",
  "FvsPgvDlFcmvmTLlBMVztnLwWLzL",
  "cvZGDcvbPcmbTbrcDDPgvbTJdJfJHRhZSRSpRRfHdSpSZd",
  "FGHHHWvBWrHHrWVZJvVtcSrtrTcrtcjMTjStSM",
  "swpwfRhRmmmRQDzcJlcqMSMMqtbMTz",
  "dQDRDDRQfmmQDNsLfwRJvZJWFWVnPWvvPddBnC",
  "zVhHvhMVTnMJgcTzMcfGJtfBWRtBRqJWtqJb",
  "hlZjZSQCZtfBbGjqbb",
  "SQDNwplrDVnhDcVHgT",
  "HHZmttZVLVMQQJwMfcDRfDbbMN",
  "phWvTgBqqgBWsTPTzhWzhzfNGNNwfqfcDwJRRbNcJcbl",
  "FnTsvnhppTPFTBpPzPvpBBpFVmtfCjfmjtCmFdStLmtdfjSd",
  "hMTPPMNlLZNSGNbRBB",
  "gjmrsrttsCnsCsttVsjvttvtZGFHdbZGWWWdZSWddBHHnSWH",
  "BmvptjsrfjBgsvvfgmfQchMpMqqhcQPMMPMhLQ",
  "dJHGnrJJpGpDpFzzDmfsfSSCbfTfMbbRDb",
  "vLcwtWNgtVtSNWmTmTMCmhNhTRfM",
  "jqVgqVvWwwLwwgqZgjVSrPGzHHHqFnrHnFGHJGdr",
  "QcQcdgbzwJnzfgVnVwdHQbdBrrpplHvmhLjrlTphppLrjl",
  "MsPssfSZMWGWqWssSNPqrmmLBvjhqTvhjBprhB",
  "GRDDZMFNMGFCSNWFPDMMFWNnwVtdVdQfcgtddwQwzRJfQd",
  "pMqCMBGpMMCnwnpBMGBlbVRFJFWsJzRdzHlWzzJdJsJd",
  "jLLZjDgPbNPZTDbvftvZgzRFsRzRrRRHWFsJsFJc",
  "TZZLDPjtmDmbqQGwQnVM",
  "RjnNhBnnNNmJmBNhrqGpsHbHtstgTtTjqb",
  "WVMfWwQTzWZDMtlsfldqpplstf",
  "WVTWSTzwQWSSvQVZCQPTSZPvBcnmcvnrhmNcRFncNLRLJmnB",
  "lffQcnNTQBBcwqsdcqjSspcWtD",
  "MPMGrHGMMTqWTtDg",
  "VGRGLrJHZzLHPzTNTmmBfZQFTNBQ",
  "lQBPPrBrlnqBgSRhgZZZrLJr",
  "VNcWMDZbJHhWfWff",
  "VwvMwMvdwvdwjcwdwDDqsqsZQqPPzqzldPQtps",
  "VVJcZJVrRSdcsddfsvvbvFZBnngBMzMZFD",
  "hLLqLpqqWWphWjhlGlCHDFgzbvFBbgBFtnQpnngg",
  "HlhlmmHBTqTHHmlLqjTGhHhPdwdmsdcSNSfNJRrRcfwVJdrr",
  "HmhvmRzzHHrRMBJBjNJGDJRnJD",
  "cbqcPqLWZwsgQWZwWPwWgPPbntJnrNftNNNBtNJJNDBNqdjB",
  "lgwWgggQcWSzrlTHMHlp",
  "FZhQpClCWLBlrNDZvrwrrNSH",
  "ztTfjMjJjgsGrqvzDGwG",
  "bMjfnjndjnJtfgMTwPjFhQhCLdQCFWQQLWQhch",
  "PtrqPrrMCPChzCtLFRbtNgbdTjbF",
  "GdZGvJSWWDGplFjbjLjLSTlL",
  "vspvnZsVppBdBnBpDCszhzMsMzzPzPhcPC",
  "PdCtdfCMfGmtfmtBSWrMQwSlwWwJNQ",
  "qTqbcjqHTZTbcDqczTjjZvWrQvVWJQSVQZZSVVrJNr",
  "qbqjRFTcHTcDFgcczRqFrPsGGGgnhtGssCdnffGmsP",
  "vVbcMvqjjjmHCBCBBmBSSH",
  "PzzLTrcrwQgfLGrJBHSGFSCHtRFBJt",
  "cfsPrLDwQNgsrTNTQgLwVpWnVWvMNvqjjqvpMvlj",
  "jbqZNjLbZQvcfhhQ",
  "CWdCDWWMCgmJDnJmdQVzMSchvfcQVFShzf",
  "WPgWGRWRHdPBsttrHvNtrl",
  "MCJCCMCqcCqJsnssjQRlTvQQQQqTvqfQ",
  "HGVmwmLVlZRzcGZG",
  "FcchHmDFpFbDMDMbntsJ",
  "vfNvvttvDRcrvRNRNTLDNRcVsFhwVBVTwbbFFVbVhbJMBB",
  "CJGgSJHdgPPSnQnjnddHGGFMSMwMMsmsFMMFhFShMWMM",
  "dGCdjgzHCPPGlHDDqJtqRcqJlpfR",
  "CwtqqvwLwnwhtRLtdRnwnnRhPHpLLppTPPpTVfTHzJWVLTWB",
  "sGDsZDllDrMFZVmGgsmDMlmHpJBHpcJFPPTHfJJPzfTHWz",
  "srgVlGSgZVGGrRvwQwdqwtCvnS",
  "MLPgDrgLzThhCTgg",
  "GVfCbvVbVvhBHlmhvhHv",
  "ZqRQffRwtNZWVZfZSMsSssncnDCDnL",
  "VwBNhNNmhJswqjJsRzPgDvSgJvtgvgDt",
  "rRMblbHFfRrSWvPPPgMzLW",
  "ZFpFpCcprGfbrGfGCHclZfnGqmsjmBdNVjQqRBnqBsVNQwBh",
  "VLQlZWQbcPgcPmWbgmDWLQzdpGMTTqdpMTNsbGsNpMSqdq",
  "HChrwfffhJtfHwJTsDqThhDMpTGsjj",
  "HvffCrtBzclQZvQD",
  "dCBVJJmrJDlBdQJWZTTsWbdWThWpbM",
  "FHjSPjwqwssSgqTMGbGWhTMHMMZG",
  "FwLvLfLjjSPqFqgzwffFSvrlDJvrQrDVrnmBvrJsQm",
  "hZCRbddrgrRSVgcGZjjLFGLZFQFp",
  "nzPvMsPvtmvPNssPMqpcWVjGGcGLlqGcGN",
  "TBzmTmzmVmrBSBRrRgdR",
  "bwZZmwfFmcfCRswNWNBsjC",
  "VDSdglSStRCCTNCD",
  "VVVppGHGlrQnnGJbMmnmCh",
  "nFhgnFVNtgtFVssgdgVtVtsqJPTNJvDSNqTZZzbzTDDzDq",
  "HqLHqcwlBjLzPvPJCCvJ",
  "HGrlHqlllHBppRrlwWFnnWfFFVhMnnWdFhfn",
  "FsMFVszjggMMzWlPJlPPlLQsJv",
  "nqnBSNlfZqSvLHnHvWLQTW",
  "hShpfCCSRtfjgFjMzdjlpr",
  "jsbDsQnnwPsFbZgSltWGdgJgpnSp",
  "SCVvLhLRrzCNBhrCvddMJpWdWGvJGlgtpv",
  "cHLBBVCcCNHrbcSQFwQTbDws",
  "rMlbLgrRgpwTDbflcnHtSScwHdJdwHJB",
  "CQCjjZPzGGzCzZQvBVBNdQNSJVcJ",
  "jsPhCzhPqFZzZzChFlsbRRLrMfTbbcLTpD",
  "dqjzmmmQBjBHCmWrgVGWrrrvrpgVpM",
  "PLJnTFbJnhTDzrGgMlvrFMzF",
  "SssPcDttntDSsLcCzHBmmwcmZQqH",
  "fFfFSPHllPRpRfnmmFfHvHjgbsBQjsptBdBTTddjsDdt",
  "ZqLJCLCZzzTgWjdzDjzb",
  "ZhNLMrNcGrchLqcCVMqRvlSnFnRnmmGRggnPnP",
  "HMCMCMrHfwMHtFwTtgHHbVjjbsRZDwDVRbZqjhBD",
  "cDpmpdpNLNDcdZjZqZBNBqssRR",
  "SLJSdPcznSvdvDcHFCftFTFWCTHnWt",
  "NlMmlPClmdGldRZHJs",
  "tgJJcJQcntHBsnBt",
  "TfSgQhhccczSVQqrgSgTjFWqLWmwLFNJLWWPPwqM",
  "GGwTHqWVdnTTVVqgngzzqHzGFbJspFccRsjDpDcjsRFDsdjR",
  "rtLflllZSrhQPLBtQStZvhjDNjbcDNDRNFjCsCDCFs",
  "mPLBQPtvtQZtBlLSmMqVGwHbVMqTHWmz",
  "VvJCrqTvPvQrCpRNVRFGfZfmfG",
  "HMzsdWsjhZSsJJZNZf",
  "wHlbjnlzWCvqJBQlrD",
  "FnVRRsVdSnSnFSRqTVdqBBDBhrDdmcddMcMQMhzm",
  "HtZvJwHlgjlGlHJLNjJrMmrcmDQfDLczDrMhhh",
  "vGGpJjttvlZljZllZvJZvwGqsSTRWSCpnCWTVPVmWWTWWn",
  "wSHCNwwmcSMLSDFcwwSSHQvZnQjLZffZjZZbVZjVVb",
  "JqsNJJGGqprJNtpWhGhspfnffTnTvZvVbZnTrfBQvV",
  "GsWhdGtPWpghJRqhtNPmClczSlDglHMlczmwCH",
  "TzRpjVRjFpVLTTdgrTgrGsZwrZZwgg",
  "vQfSBdbDbMbQNBJrlhmGnrgrgwZhvm",
  "SHSCbdbddcVWqqFPCLqR"
]

const getPriority = (i=>{
  const charNum = i.charCodeAt(0)
  if (charNum < 91) {
    return (charNum - 38)
  } else {
    return (charNum - 96)
  }
})

let accumulator = 0;

const answer1 = () => {
  accumulator = 0
  input.forEach(str => {
    const str1 = str.slice(0, Math.floor(str.length / 2))
    const str2 = str.slice(Math.floor(str.length / 2))
    for (i = 0; i < str1.length; i++) {
      if (str2.includes(str1[i])) {
        accumulator += getPriority(str1[i])
        break;
      }
    }
  })
  return accumulator
}

const answer2 = () => {
  accumulator = 0
  for (i=0;i<input.length;i+=3) {
    const arr = [input[i], input[i + 1], input[i + 2]]
    for (x = 0; x < arr[0].length; x++) {
      if (arr[1].includes(arr[0][x]) && arr[2].includes(arr[0][x])) {
        accumulator += getPriority(arr[0][x])
        break;
      }
    }
  }
  return accumulator
}

console.log(`First score - ${answer1()}`)
console.log(`Second score - ${answer2()}`)