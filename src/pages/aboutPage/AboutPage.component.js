import React from 'react';
import * as s from './AboutPage.styles';

const AboutPage = () => {
    return (
        <s.AboutGrid>
            <s.Persons>
                <s.Clem>
                    <h3>PIQUE: a Platform for Investigative software Quality Understanding and Evaluation</h3>
                </s.Clem>
                <s.Derek>
                    <p>PIQUE is a collection of library functions and runner entry points designed to support experimental software quality analysis from a language-agnostic perspective. To remain language-agnostic, this project provides the abstractions, interfaces, and algorithms necessary for quality assessment, but leaves the task of defining language-specific static analysis operations to dependent language-specific projects that will use MSUSEL-PIQUE as a dependency. 
                    To facilitate newcomers, this platform provides default classes for each quality assessment component to allow the platform to be used "out of the box", 
                    and for those familiar with quality assessment approaches, the platform allows each component to be overridden with experimental approaches.
                    </p>
                </s.Derek>
                <s.Andrew/>
                <s.Payton/>
                <s.Xuying/>
            </s.Persons>
        </s.AboutGrid>
    )
}

export default AboutPage;