import React from 'react';
import {SlBriefcase} from "react-icons/sl";
import {Button} from "@mantine/core";

import s from "../../../styles/careers/Job.module.scss"

const Job = () => {
    return (
        <section className={s.job}>
            <div className="container">
                <h2 className="sectionTitle">
                    <span>Job Openings</span>
                </h2>
                <p className={s.job__info}>
                    Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for
                    customer service.
                    Join our team and be part of shaping a brighter future in the banking industry
                </p>
                <ul className={s.job__list}>
                    <li className={s.job__item}>
                        <div className={s.relationships}>
                            <h3 className={s.relationships__title}>
                                Relationship Manager
                            </h3>
                            <div className={s.relationships__texts}>
                                <p>Location: India</p>
                                <p>Department: Retail Banking</p>
                            </div>
                        </div>
                        <div className={s.about__job}>
                            <h3 className={s.about__job_title}>About This Job</h3>
                            <p className={s.about__job_text}>
                                As a Relationship Manager at YourBank, you will be responsible for developing and
                                maintaining relationships
                                with our valued customers. You will proactively identify their financial needs and
                                offer tailored solutions
                                to help them achieve their goals. We are seeking individuals with excellent
                                communication skills,
                                a strong sales acumen, and a passion for delivering exceptional customer service.
                            </p>
                        </div>
                        <div className={s.requirements}>
                            <h3 className={s.requirements__title}>Requirements & Qualifications</h3>
                            <ul className={s.requirements__list}>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>Bachelor's degree in Business, Finance, or a related field</p>
                                </li>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>Minimum of 3 years of experience in sales or relationship management in the
                                        banking industry</p>
                                </li>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>Proven track record of meeting and exceeding sales targets</p>
                                </li>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>Excellent interpersonal and negotiation skills</p>
                                </li>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>Strong knowledge of banking products and services</p>
                                </li>
                            </ul>
                        </div>
                        <Button className={s.job__item_button} variant="filled" size="lg" radius="xl">Apply Now</Button>
                    </li>
                    <li className={s.job__item}>
                        <div className={s.relationships}>
                            <h3 className={s.relationships__title}>
                                Risk Analyst
                            </h3>
                            <div className={s.relationships__texts}>
                                <p>Location: India</p>
                                <p>Department: Risk Management</p>
                            </div>
                        </div>
                        <div className={s.about__job}>
                            <h3 className={s.about__job_title}>About This Job</h3>
                            <p className={s.about__job_text}>
                                As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing
                                potential risks
                                to our organization. You will analyze data, conduct risk assessments, and develop
                                strategies to mitigate
                                risks. We are looking for detail-oriented individuals with strong analytical skills and
                                a solid
                                understanding of risk management principles.
                            </p>
                        </div>
                        <div className={s.requirements}>
                            <h3 className={s.requirements__title}>Requirements & Qualifications</h3>
                            <ul className={s.requirements__list}>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>Bachelor's degree in Finance, Economics, or a related field</p>
                                </li>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>Minimum of 2 years of experience in risk management or a similar role</p>
                                </li>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>Proficiency in risk analysis tools and techniques</p>
                                </li>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>Strong analytical and problem-solving skills</p>
                                </li>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>Knowledge of regulatory requirements and industry best practices</p>
                                </li>
                            </ul>
                        </div>
                        <Button className={s.job__item_button} variant="filled" size="lg" radius="xl">Apply Now</Button>
                    </li>
                    <li className={s.job__item}>
                        <div className={s.relationships}>
                            <h3 className={s.relationships__title}>
                                IT Security Specialist
                            </h3>
                            <div className={s.relationships__texts}>
                                <p>Location: India</p>
                                <p>Department: Information Technology</p>
                            </div>
                        </div>
                        <div className={s.about__job}>
                            <h3 className={s.about__job_title}>About This Job</h3>
                            <p className={s.about__job_text}>
                                As an IT Security Specialist at YourBank, you will be responsible for ensuring the
                                security and integrity
                                of our information systems. You will develop and implement security protocols, conduct
                                vulnerability
                                assessments, and respond to security incidents. We are seeking individuals with a strong
                                technical
                                background, knowledge of cybersecurity best practices, and a commitment to maintaining
                                the confidentiality of customer data.
                            </p>
                        </div>
                        <div className={s.requirements}>
                            <h3 className={s.requirements__title}>Requirements & Qualifications</h3>
                            <ul className={s.requirements__list}>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>Bachelor's degree in Computer Science, Information Security, or a related
                                        field</p>
                                </li>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>Minimum of 5 years of experience in IT security or a similar role</p>
                                </li>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>In-depth knowledge of network security protocols and technologies</p>
                                </li>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>Familiarity with regulatory frameworks such as PCI DSS and GDPR</p>
                                </li>
                                <li className={s.requirements__item}>
                                    <div className={s.requirements__item_img}>
                                        <SlBriefcase/>
                                    </div>
                                    <p>Professional certifications such as CISSP or CISM are preferred</p>
                                </li>
                            </ul>
                        </div>
                        <Button className={s.job__item_button} variant="filled" size="lg" radius="xl">Apply Now</Button>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Job;