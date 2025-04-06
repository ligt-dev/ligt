# Classes

## Element
**Description:** Top-level concept for Ligt classes. 
This is the root class of the Ligt ontology hierarchy and was introduced to define the domain of [metadata](properties.md#metadata).

## Segment
**Description:** A generalization over text-structural units at and above the level of individual glossed examples (utterances).
Used for modelling text subdivision and example groups and individual examples.

**Note:** The term should not be confused with the term "phonological segment" as used in linguistic theory.

## Document
**Description:** The root element for any Ligt collection.

**Superclass:** [Element](classes.md#element)

**Properties:**
- [hasText](properties.md#hastext) — Assigns one or multiple texts (of type [InterlinearText](classes.md#interlineartext)) to the document.
- [hasUtterances](properties.md#hasutterances) — Assigns one or more utterances (of type [InterlinearCollection](classes.md#interlinearcollection))
to the document, allowing for the representation of isolated examples (e.g., [APiCS](https://apics-online.info/) or [ODIN](https://faculty.washington.edu/fxia/odin/index.html) database).

## InterlinearCollection
**Description:** Represents a group of separate, usually non-consecutive utterances ([Utterance](classes.md#utterance)) not linked by meaning.
Can be a set of examples demonstrating grammatical phenomena, a collection of elicitations, or even a full database (e.g., [APiCS](https://apics-online.info/)).

**Superclass:** [Segment](classes.md#segment)

## InterlinearText
**Description:** Represents a coherent group of (mostly) consecutive utterances 
between which meaning relations can be established.

**Superclass:** [Segment](classes.md#segment)

## Paragraph

**Description:** In written text, represents a unit of text not divided by manual line breaks.
In other modalities, can be defined as a group of utterances in discourse that are thematically closely related, 
e.g., sharing the same theme or topic.

**Superclass:** [Segment](classes.md#segment)

## Utterance

**Description:** Represents a single glossed example, often a sentence or a sentential fragment.
We regard utterances as atomic, i.e., an utterance should not contain other utterances.

**Superclass:** [Segment](classes.md#segment)

## Analysis

**Description:** A generalization over [Tier](classes.md#tier) and [Item](classes.md#tier)
(whose properties represent actual annotations) to define the domain of [annotation](properties.md#annotation).

**Superclass:** [Element](classes.md#element)

## Tier
**Description:** Represents a layer of annotation.

## WordTier
**Description:** Represents a word-like layer of annotation.

**Properties:**
- [hasWords](properties.md#haswords)

**Superclass:** [Tier](classes.md#tier)

## MorphTier
**Description:** Represents a morph-like layer of annotation.

**Properties:**
- [hasMorphs](properties.md#hasmorphs)

**Superclass:** [Tier](classes.md#tier)

## Item
**Description:** An annotated unit in an IGT tier

**Superclass:** [Analysis](classes.md#analysis)

**Properties:**
- [correspondsTo](properties.md#correspondsto)
- [next](properties.md#next)

## Word

**Properties:**
- [nextWord](properties.md#nextWord)

## Morph
**Properties:**
- [nextMorph](properties.md#nextMorph)

## Metadata
**Description:** Used for representing reified [metadata](properties.md#metadata).
The class and its properties follow the Open Annotation/Web Annotation model.