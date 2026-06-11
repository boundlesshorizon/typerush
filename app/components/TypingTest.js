'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './TypingTest.module.css'

const WORD_BANKS = {
  easy: ['the','be','to','of','and','a','in','that','have','it','for','not','on','with','he','as','you','do','at','this','but','his','by','from','they','we','say','her','she','or','an','will','my','one','all','would','there','their','what','so','up','out','if','about','who','get','which','go','me','when','make','can','like','time','no','just','him','know','take','people','into','year','your','good','some','could','them','see','other','than','then','now','look','only','come','its','over','think','also','back','after','use','two','how','our','work','first','well','way','even','new','want','because','any','these','give','day','most','us','great','between','need','large','often','hand','high','place','hold','turn','move','live','without','family','body','music','color','stand','sun','questions','fish','area','mark','dog','horse','birds','problem','complete','room','knew','since','ever','piece','told','usually','didn','friends','easy','heard','order','red','door','sure','become','top','ship','across','today','during','short','better','best','however','low','hours','black','products','happened','whole','measure','remember','early','waves','reached','listen','wind','rock','space','covered','fast','several','hold','himself','toward','five','step','morning','passed','vowel','true','hundred','against','pattern','numeral','table','north','slowly','money','map','farm','pulled','draw','voice','power','town','fine','drive','led','cry','dark','machine','note','waiting','plan','figure','star','box','noun','field','rest','correct','lead','able','pound','done','beauty','drive','stood','contain','front','teach','weeks','final','gave','green','oh','quick','develop','ocean','warm','free','minute','strong','special','behind','clear','tail','produce','fact','street','inch','lot','nothing','course','stay','wheel','full','force','blue','object','decide','surface','deep','moon','island','foot','yet','busy','test','record','boat','common','gold','possible','plane','age','dry','wonder','laugh','thousand','ago','ran','check','game','shape','yes','hot'],
  medium: ['achieve','balance','careful','develop','explore','freedom','general','history','improve','justice','knowledge','language','measure','natural','observe','pattern','quality','release','similar','through','unique','various','window','ancient','benefit','complex','describe','elegant','feature','genuine','however','imagine','journey','largely','meaning','network','opinion','popular','realize','science','thought','usually','version','without','believe','between','certain','connect','contain','correct','country','culture','describe','details','divided','economy','element','example','explain','factors','feeling','finally','follows','forward','further','growing','happens','herself','himself','include','initial','instead','largely','leading','learned','limited','logical','machine','million','minimum','noticed','nothing','numbers','objects','offered','options','outside','perfect','perhaps','picture','present','problem','process','product','program','project','purpose','quickly','reading','reasons','results','returns','running','several','similar','society','solving','started','success','suggest','support','systems','testing','thought','together','usually','variety','virtual','website','written','absolute','accurate','activity','addition','advanced','although','analysis','approach','argument','audience','becoming','behavior','building','business','capacity','category','century','challenge','character','children','combined','compared','complete','computer','consider','consumer','creative','critical','customer','decision','delivery','designed','dialogue','directly','document','economic','emerging','employed','enhanced','evidence','exciting','existing','extended','familiar','finished','flexible','followed','founded','function','generate','greatest','happened','identify','increase','industry','informed','interest','internal','involves','involved','language','learning','majority','managing','material','memories','messages','modified','monetary','movement','multiple','national','negative','observed','obtained','occurred','official','operated','opposite','ordinary','original','outcomes','overview','personal','physical','planning','policies','position','positive','practice','previous','problems','produces','programs','progress','provides','publicly','reaction','realized','recently','regional','remained','reported','requires','research','revealed','reviewed','scenario','selected','services','situated','solution','specific','standard','strategy','strength','students','subjects','suggests','supplies','teachers','template','terminal','thinking','thousand','tracking','training','traveled','ultimate','uploaded','variable','workers','worldwide'],
  hard: ['abstraction','acknowledge','architecture','bibliographic','circumstantial','comprehensive','consciousness','controversial','cryptographic','deliberate','demonstration','disambiguation','discrepancy','disproportionate','ecclesiastical','entrepreneurial','epistemological','extraordinarily','fluorescence','gubernatorial','hallucination','incomprehensible','indistinguishable','infrastructure','interdisciplinary','juxtaposition','kaleidoscope','metaphysical','misconception','multidimensional','nevertheless','nomenclature','nonconformist','objectification','orchestration','overwhelming','paradoxical','philosophical','photosynthesis','physiological','predominantly','psychological','quintessential','reconnaissance','revolutionary','simultaneously','sophisticated','straightforward','subconscious','synchronization','technological','telecommunication','thermodynamic','transcendental','uncomfortable','unprecedented','vulnerability','whistleblower','acknowledgment','administration','amplification','approximation','autobiography','categorization','circumstances','clarification','collaboration','commemoration','communication','competitiveness','complementary','complications','comprehension','concentration','configuration','confrontation','considerations','consolidation','contamination','contemplation','contradictory','controversial','decomposition','demonstration','differentiate','disappointing','disintegration','documentation','electromagnetic','encouragement','environmental','establishment','exaggeration','extraordinary','familiarization','fragmentation','functionality','generalization','globalization','hallucination','identification','implementation','indeterminate','industrialization','infrastructure','initialization','interdependent','interpretation','investigation','justification','manufacturing','marginalization','memorabilia','metamorphosis','misinterpretation','misrepresentation','normalization','organizational','personalization','pharmaceutical','philosophical','polarization','precipitation','proportionality','psychological','quantification','rationalization','reconstruction','redistribution','reorganization','representation','responsibility','revolutionary','simplification','sophistication','specification','standardization','transportation','uncomfortable','underestimate','understanding','visualization','vulnerability'],
  code: ['function','return','const','let','var','async','await','import','export','class','extends','interface','typeof','instanceof','promise','callback','component','useState','useEffect','render','string','number','boolean','undefined','null','object','array','fetch','response','request','server','client','database','query','schema','router','module','package','install','deploy','build','debug','console','error','catch','finally','throw','try','switch','case','break','continue','while','forEach','filter','reduce','map','push','pop','slice','splice','length','index','loop','scope','closure','prototype','inherit','method','property','argument','parameter','recursion','algorithm','complexity','binary','syntax','compile','runtime','library','framework','endpoint','middleware','payload','token','session','cookie','boolean','integer','float','double','pointer','stack','queue','linked','graph','tree','node','leaf','root','depth','breadth','search','sort','merge','quick','bubble','heap','hash','table','collision','rehash','bucket','iterator','generator','decorator','mixin','singleton','factory','observer','strategy','adapter','proxy','command','facade','pipeline','stream','buffer','socket','thread','process','mutex','semaphore','deadlock','race','condition','atomic','volatile','immutable','serializer','deserialize','encode','decode','encrypt','decrypt','compress','decompress','cache','invalidate','throttle','debounce','memoize','curry','compose','partial','apply','bind','call','prototype','constructor','destructor','garbage','collect','allocate','deallocate','reference','dereference','namespace','module','bundle','chunk','minify','transpile','polyfill','shim','linter','prettier','webpack','vite','rollup','babel','typescript','javascript','python','golang','rust','kotlin','swift','java','csharp','ruby','php','shell','bash','yaml','json','xml','html','css','scss','sass','less','graphql','restful','grpc','websocket']
}

function getRandWords(bank, n) {
  const result = []
  for (let i = 0; i < n; i++) {
    result.push(bank[Math.floor(Math.random() * bank.length)])
  }
  return result
}

export default function TypingTest() {
  const [selectedTime, setSelectedTime] = useState(30)
  const [selectedDiff, setSelectedDiff] = useState('easy')
  const [words, setWords] = useState([])
  const [typedChars, setTypedChars] = useState([]) // array of arrays: typedChars[wordIdx][charIdx] = 'correct'|'wrong'|null
  const [currentWordIdx, setCurrentWordIdx] = useState(0)
  const [inputVal, setInputVal] = useState('')
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [elapsed, setElapsed] = useState(0)
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [streak, setStreak] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  const [errorCount, setErrorCount] = useState(0)
  const [correctChars, setCorrectChars] = useState(0)
  const [totalChars, setTotalChars] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const inputRef = useRef(null)
  const timerRef = useRef(null)
  const wordsAreaRef = useRef(null)
  const currentWordRef = useRef(null)
  const correctCharsRef = useRef(0)
  const totalCharsRef = useRef(0)
  const streakRef = useRef(0)
  const wordCountRef = useRef(0)
  const errorCountRef = useRef(0)

  const initTest = useCallback((time, diff) => {
    clearInterval(timerRef.current)
    const t = time || selectedTime
    const d = diff || selectedDiff
    const bank = WORD_BANKS[d]
    const w = getRandWords(bank, 120)
    setWords(w)
    setTypedChars(w.map(() => []))
    setCurrentWordIdx(0)
    setInputVal('')
    setStarted(false)
    setFinished(false)
    setTimeLeft(t)
    setElapsed(0)
    setWpm(0)
    setAccuracy(100)
    setStreak(0)
    setWordCount(0)
    setErrorCount(0)
    setCorrectChars(0)
    setTotalChars(0)
    setShowResult(false)
    correctCharsRef.current = 0
    totalCharsRef.current = 0
    streakRef.current = 0
    wordCountRef.current = 0
    errorCountRef.current = 0
  }, [selectedTime, selectedDiff])

  useEffect(() => { initTest(selectedTime, selectedDiff) }, [])

  const endTest = useCallback((elapsedSec) => {
    clearInterval(timerRef.current)
    const mins = elapsedSec / 60
    const finalWpm = mins > 0 ? Math.round((correctCharsRef.current / 5) / mins) : 0
    const finalAcc = totalCharsRef.current > 0 ? Math.round((correctCharsRef.current / totalCharsRef.current) * 100) : 100
    setWpm(finalWpm)
    setAccuracy(finalAcc)
    setWordCount(wordCountRef.current)
    setErrorCount(errorCountRef.current)
    setFinished(true)
    setShowResult(true)
  }, [])

  const startTimer = useCallback((time) => {
    let elapsedSec = 0
    timerRef.current = setInterval(() => {
      elapsedSec++
      setElapsed(elapsedSec)
      const rem = time - elapsedSec
      setTimeLeft(Math.max(0, rem))
      if (correctCharsRef.current > 0) {
        const mins = elapsedSec / 60
        setWpm(Math.round((correctCharsRef.current / 5) / mins))
      }
      if (rem <= 0) { endTest(elapsedSec) }
    }, 1000)
  }, [endTest])

  const handleInput = useCallback((e) => {
    if (finished) return
    const val = e.target.value
    if (!started) {
      setStarted(true)
      startTimer(selectedTime)
    }

    if (val.endsWith(' ')) {
      const typed = val.trim()
      const expected = words[currentWordIdx]
      const isCorrect = typed === expected
      const chars = typed.length > 0 ? expected.length + 1 : 0

      wordCountRef.current += 1
      setWordCount(wordCountRef.current)

      if (isCorrect) {
        streakRef.current += 1
        correctCharsRef.current += expected.length + 1
        totalCharsRef.current += expected.length + 1
      } else {
        errorCountRef.current += 1
        streakRef.current = 0
        const matched = expected.split('').filter((c, i) => c === (typed[i] || '')).length
        correctCharsRef.current += matched
        totalCharsRef.current += Math.max(typed.length, expected.length) + 1
      }

      setStreak(streakRef.current)
      const acc = totalCharsRef.current > 0 ? Math.round((correctCharsRef.current / totalCharsRef.current) * 100) : 100
      setAccuracy(acc)

      setTypedChars(prev => {
        const next = [...prev]
        next[currentWordIdx] = expected.split('').map((ch, i) => typed[i] === ch ? 'correct' : 'wrong')
        return next
      })

      setCurrentWordIdx(prev => prev + 1)
      setInputVal('')

      if (words.length - currentWordIdx < 30) {
        const extra = getRandWords(WORD_BANKS[selectedDiff], 60)
        setWords(prev => [...prev, ...extra])
        setTypedChars(prev => [...prev, ...extra.map(() => [])])
      }
      return
    }

    setInputVal(val)
    setTypedChars(prev => {
      const next = [...prev]
      const word = words[currentWordIdx]
      next[currentWordIdx] = word.split('').map((ch, i) => {
        if (i >= val.length) return null
        return val[i] === ch ? 'correct' : 'wrong'
      })
      return next
    })
  }, [finished, started, words, currentWordIdx, selectedTime, selectedDiff, startTimer])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Tab') { e.preventDefault(); initTest(selectedTime, selectedDiff); return }
    if (e.key === 'Escape') { if (started && !finished) endTest(elapsed); return }
    if (e.key === 'Backspace' && inputVal === '' && currentWordIdx > 0) {
      e.preventDefault()
      setCurrentWordIdx(prev => prev - 1)
      setInputVal(words[currentWordIdx - 1])
      setTypedChars(prev => {
        const next = [...prev]
        next[currentWordIdx - 1] = []
        return next
      })
    }
  }, [inputVal, currentWordIdx, words, started, finished, elapsed, selectedTime, selectedDiff, initTest, endTest])

  useEffect(() => {
    const handleGlobalKey = (e) => {
      if (e.key === 'Tab') { e.preventDefault(); initTest(selectedTime, selectedDiff) }
    }
    document.addEventListener('keydown', handleGlobalKey)
    return () => document.removeEventListener('keydown', handleGlobalKey)
  }, [selectedTime, selectedDiff, initTest])

  const timerPct = (timeLeft / selectedTime) * 100

  const getGrade = (w) => {
    if (w >= 100) return { label: 'Elite Typist', color: '#0d0d0f', bg: '#00ffc8' }
    if (w >= 70) return { label: 'Advanced', color: '#0d0d0f', bg: '#a78bfa' }
    if (w >= 50) return { label: 'Proficient', color: '#0d0d0f', bg: '#fbbf24' }
    if (w >= 30) return { label: 'Intermediate', color: '#e8e8ec', bg: '#374151' }
    return { label: 'Beginner', color: '#e8e8ec', bg: '#1f2937' }
  }

  const grade = getGrade(wpm)

  const visibleStart = Math.max(0, currentWordIdx - 8)
  const visibleWords = words.slice(0, currentWordIdx + 40)

  return (
    <div className={styles.root}>
      <div className={styles.glow} />

      <header className={styles.header}>
        <div className={styles.logo}>type<span>rush</span></div>
        <nav className={styles.modes}>
          {[15,30,60,120].map(t => (
            <button
              key={t}
              className={`${styles.modeBtn} ${selectedTime === t ? styles.active : ''}`}
              onClick={() => { setSelectedTime(t); initTest(t, selectedDiff) }}
            >{t}s</button>
          ))}
        </nav>
      </header>

      <div className={styles.diffRow}>
        <span className={styles.diffLabel}>difficulty</span>
        {['easy','medium','hard','code'].map(d => (
          <button
            key={d}
            className={`${styles.diffBtn} ${selectedDiff === d ? styles.diffActive : ''}`}
            onClick={() => { setSelectedDiff(d); initTest(selectedTime, d) }}
          >{d}</button>
        ))}
      </div>

      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <div className={`${styles.statVal} ${styles.wpmVal}`}>{wpm}</div>
          <div className={styles.statLabel}>WPM</div>
        </div>
        <div className={styles.stat}>
          <div className={`${styles.statVal} ${styles.accVal}`}>{accuracy}%</div>
          <div className={styles.statLabel}>Accuracy</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statVal}>{timeLeft}</div>
          <div className={styles.statLabel}>Time left</div>
        </div>
        <div className={styles.stat}>
          <div className={`${styles.statVal} ${styles.streakVal}`}>{streak}</div>
          <div className={styles.statLabel}>Streak 🔥</div>
        </div>
      </div>

      <div className={styles.timerBar}>
        <div className={styles.timerFill} style={{ width: `${timerPct}%` }} />
      </div>

      <div
        className={styles.wordsArea}
        onClick={() => inputRef.current?.focus()}
        ref={wordsAreaRef}
      >
        {!started && !finished && (
          <div className={styles.overlay}>
            <span className={styles.overlayIcon}>⌨️</span>
            <span className={styles.overlayText}>Click here or start typing</span>
            <span className={styles.overlayHint}>Press Space after each word · Tab to restart</span>
          </div>
        )}
        <div className={styles.words}>
          {visibleWords.map((word, wi) => {
            const isCurrent = wi === currentWordIdx
            const isDone = wi < currentWordIdx
            const chars = typedChars[wi] || []
            return (
              <span
                key={wi}
                className={`${styles.word} ${isCurrent ? styles.currentWord : ''}`}
                ref={isCurrent ? currentWordRef : null}
              >
                {word.split('').map((ch, ci) => {
                  const state = chars[ci]
                  const isCursor = isCurrent && ci === (inputVal.length < word.length ? inputVal.length : word.length)
                  return (
                    <span
                      key={ci}
                      className={`${styles.char} ${state === 'correct' ? styles.correct : ''} ${state === 'wrong' ? styles.wrong : ''} ${isCursor ? styles.cursor : ''}`}
                    >{ch}</span>
                  )
                })}
                {isCurrent && inputVal.length >= word.length && (
                  <span className={`${styles.char} ${styles.cursor}`}></span>
                )}
              </span>
            )
          })}
        </div>
        <input
          ref={inputRef}
          className={styles.hiddenInput}
          value={inputVal}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Type here"
        />
      </div>

      <div className={styles.bottom}>
        <button className={styles.restartBtn} onClick={() => initTest(selectedTime, selectedDiff)}>
          ↺ Restart
        </button>
        <span className={styles.hint}>Tab → restart &nbsp;|&nbsp; Esc → stop</span>
      </div>

      {showResult && (
        <div className={styles.resultOverlay}>
          <div className={styles.resultTitle}>your result</div>
          <div className={styles.resultWpm}>{wpm}</div>
          <div className={styles.resultWpmLabel}>words per minute</div>
          <div className={styles.resultGrid}>
            <div className={styles.resultItem}>
              <div className={styles.resultItemVal} style={{ color: '#a78bfa' }}>{accuracy}%</div>
              <div className={styles.resultItemLabel}>accuracy</div>
            </div>
            <div className={styles.resultItem}>
              <div className={styles.resultItemVal} style={{ color: '#fbbf24' }}>{wordCount}</div>
              <div className={styles.resultItemLabel}>words typed</div>
            </div>
            <div className={styles.resultItem}>
              <div className={styles.resultItemVal} style={{ color: '#f87171' }}>{errorCount}</div>
              <div className={styles.resultItemLabel}>errors</div>
            </div>
          </div>
          <div className={styles.resultGrade} style={{ background: grade.bg, color: grade.color }}>
            {grade.label}
          </div>
          <button className={styles.tryAgain} onClick={() => initTest(selectedTime, selectedDiff)}>
            Try Again
          </button>
        </div>
      )}
    </div>
  )
}
