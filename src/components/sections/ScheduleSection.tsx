import { differenceInMinutes, format } from 'date-fns';
import Image from 'next/image';
import styles from './ScheduleSection.module.css';

import * as React from 'react';
import type * as types from 'types';

const SCHEDULE_ROW_INCREMENT = 5; // minutes

const ScheduleSection: React.FC = () => {
  const section: types.ScheduleSection = {
    tracks: [
      {
        title: 'Track 1',
        details: 'Primary Session Hall',
        sessions: [
          {
            title: 'Opening and Introduction',
            startTime: new Date('2022-08-14T01:00:00.000Z'),
            endTime: new Date('2022-08-14T01:15:00.000Z'),
            speakers: [
              {
                name: 'Arnelle Balane',
                designation: 'Software Developer',
                company: 'Newlogic',
                bio: 'Arnelle is a Web developer from Cebu, Philippines who enjoys building things with good old HTML, CSS, JavaScript, and Web Platform APIs. He co-organizes GDG Cebu and is an active volunteer and speaker for other local JavaScript communities. He experiments with cool new Web technologies and writes about them in his blog. When not busy experimenting with new Web APIs, he can also taking photos, playing video games, or practicing his card tricks.',
                image: {
                  url: '/images/speakers/arnelle-balane.jpg',
                  alt: 'Arnelle Balane',
                  width: 500,
                  height: 500,
                },
              },
              {
                name: 'Arnelle Balane',
                designation: 'Software Developer',
                company: 'Newlogic',
                bio: 'Arnelle is a Web developer from Cebu, Philippines who enjoys building things with good old HTML, CSS, JavaScript, and Web Platform APIs. He co-organizes GDG Cebu and is an active volunteer and speaker for other local JavaScript communities. He experiments with cool new Web technologies and writes about them in his blog. When not busy experimenting with new Web APIs, he can also taking photos, playing video games, or practicing his card tricks.',
                image: {
                  url: '/images/speakers/arnelle-balane.jpg',
                  alt: 'Arnelle Balane',
                  width: 500,
                  height: 500,
                },
              },
            ],
            spanAllTracks: true,
          },
          {
            title: 'Google Developer Keynote',
            startTime: new Date('2022-08-14T01:15:00.000Z'),
            endTime: new Date('2022-08-14T01:40:00.000Z'),
            speakers: [
              {
                name: 'Arnelle Balane',
                designation: 'Software Developer',
                company: 'Newlogic',
                bio: 'Arnelle is a Web developer from Cebu, Philippines who enjoys building things with good old HTML, CSS, JavaScript, and Web Platform APIs. He co-organizes GDG Cebu and is an active volunteer and speaker for other local JavaScript communities. He experiments with cool new Web technologies and writes about them in his blog. When not busy experimenting with new Web APIs, he can also taking photos, playing video games, or practicing his card tricks.',
                image: {
                  url: '/images/speakers/arnelle-balane.jpg',
                  alt: 'Arnelle Balane',
                  width: 500,
                  height: 500,
                },
              },
              {
                name: 'Arnelle Balane',
                designation: 'Software Developer',
                company: 'Newlogic',
                bio: 'Arnelle is a Web developer from Cebu, Philippines who enjoys building things with good old HTML, CSS, JavaScript, and Web Platform APIs. He co-organizes GDG Cebu and is an active volunteer and speaker for other local JavaScript communities. He experiments with cool new Web technologies and writes about them in his blog. When not busy experimenting with new Web APIs, he can also taking photos, playing video games, or practicing his card tricks.',
              },
            ],
            spanAllTracks: true,
          },
          {
            title: 'Women TechMakers: Lightning Talks',
            startTime: new Date('2022-08-14T01:40:00.000Z'),
            endTime: new Date('2022-08-14T02:40:00.000Z'),
          },
          {
            title: 'Firebase and IoT',
            startTime: new Date('2022-08-14T02:40:00.000Z'),
            endTime: new Date('2022-08-14T03:10:00.000Z'),
            speakers: [
              {
                name: 'Arnelle Balane',
                designation: 'Software Developer',
                company: 'Newlogic',
                bio: 'Arnelle is a Web developer from Cebu, Philippines who enjoys building things with good old HTML, CSS, JavaScript, and Web Platform APIs. He co-organizes GDG Cebu and is an active volunteer and speaker for other local JavaScript communities. He experiments with cool new Web technologies and writes about them in his blog. When not busy experimenting with new Web APIs, he can also taking photos, playing video games, or practicing his card tricks.',
                image: {
                  url: '/images/speakers/arnelle-balane.jpg',
                  alt: 'Arnelle Balane',
                  width: 500,
                  height: 500,
                },
              },
            ],
          },
        ],
      },
      {
        title: 'Track 2',
        details: 'Secondary Session Hall',
        sessions: [
          {
            title: 'WTF is JAMstack',
            startTime: new Date('2022-08-14T01:40:00.000Z'),
            endTime: new Date('2022-08-14T02:10:00.000Z'),
          },
          {
            title: 'Leveling up creativity on the Web with CSS Houdini',
            startTime: new Date('2022-08-14T02:10:00.000Z'),
            endTime: new Date('2022-08-14T03:00:00.000Z'),
          },
          {
            title: 'Automating GSuite using Google App Script',
            startTime: new Date('2022-08-14T03:00:00.000Z'),
            endTime: new Date('2022-08-14T03:30:00.000Z'),
          },
        ],
      },
      {
        title: 'Track 3',
        sessions: [
          {
            title: 'WTF is JAMstack',
            startTime: new Date('2022-08-14T01:40:00.000Z'),
            endTime: new Date('2022-08-14T02:10:00.000Z'),
          },
          {
            title: 'Leveling up creativity on the Web with CSS Houdini',
            startTime: new Date('2022-08-14T02:10:00.000Z'),
            endTime: new Date('2022-08-14T03:00:00.000Z'),
          },
          {
            title: 'Automating GSuite using Google App Script',
            startTime: new Date('2022-08-14T03:00:00.000Z'),
            endTime: new Date('2022-08-14T03:30:00.000Z'),
          },
        ],
      },
      {
        title: 'Track 4',
        sessions: [
          {
            title: 'WTF is JAMstack',
            startTime: new Date('2022-08-14T01:40:00.000Z'),
            endTime: new Date('2022-08-14T02:10:00.000Z'),
          },
          {
            title: 'Leveling up creativity on the Web with CSS Houdini',
            startTime: new Date('2022-08-14T02:10:00.000Z'),
            endTime: new Date('2022-08-14T03:00:00.000Z'),
          },
          {
            title: 'Automating GSuite using Google App Script',
            startTime: new Date('2022-08-14T03:00:00.000Z'),
            endTime: new Date('2022-08-14T03:30:00.000Z'),
          },
        ],
      },
    ],
  };

  const style = {
    '--grid-tracks': section.tracks.length,
  } as React.CSSProperties;

  return (
    <section className="py-8 px-6 md:py-20">
      <div className="xl:container mx-auto">
        <div className={styles.grid} style={style}>
          {renderSchedule(section)}
        </div>
      </div>
    </section>
  );
};

const renderSchedule = (schedule: types.ScheduleSection): React.ReactNode => {
  const startTimes = getSessionStartTimes(schedule);
  const firstStartTime = startTimes[0];

  const renderSessionsAtTime = (startTime: Date): React.ReactNode => {
    const startTimeString = getTimeString(startTime);
    const offsetFromFirstStartTime = getIntervalsFromFirstStartTime(firstStartTime, startTime) + 1;

    const sessions: React.ReactNode[] = [];
    for (let i = 0; i < schedule.tracks.length; i++) {
      const track = schedule.tracks[i];
      const session = track.sessions.find((session) => getTimeString(session.startTime) === startTimeString);
      if (session) {
        const columnStart = i + 2;
        const columnEnd = session.spanAllTracks ? -1 : 'span 1';
        const rowStart = offsetFromFirstStartTime;
        const rowEnd = rowStart + getIntervalsForDuration(session.startTime, session.endTime);
        const style = {
          gridColumn: `${columnStart} / ${columnEnd}`,
          gridRow: `${rowStart} / ${rowEnd}`,
        };
        const duration = getDurationInMinutes(session.startTime, session.endTime);
        sessions.push(
          <article
            key={`${startTimeString}-${i}`}
            className="flex flex-col p-6 my-5 xl:my-0 border rounded border-gray-100"
            style={style}
          >
            <h2 className="text-lg md:text-xl">{session.title}</h2>
            <p className="text-sm">
              <span className="inline-block">{duration} minutes</span>
              {track.details && (
                <>
                  <span className="mx-2">&middot;</span>
                  <span className="inline-block">{track.details}</span>
                </>
              )}
            </p>
            {renderSpeakers(session)}
          </article>
        );
      }
    }

    const style = {
      gridColumn: '1 / span 1',
      gridRow: `${offsetFromFirstStartTime} / span 1`,
    };
    return (
      <React.Fragment key={startTimeString}>
        <p className="mt-6 mb-5 xl:mb-0 text-lg md:text-xl" style={style}>
          {startTimeString}
        </p>
        {sessions}
      </React.Fragment>
    );
  };

  return <>{startTimes.map(renderSessionsAtTime)}</>;
};

const renderSpeakers = (session: types.Session): React.ReactNode => {
  if ((session.speakers?.length ?? 0) === 0) {
    return null;
  }
  return (
    <div className="mt-auto -mb-2 pt-4">
      {session.speakers?.map((speaker, index) => (
        <div key={index} className="flex items-center my-2">
          {speaker.image ? (
            <div className="w-6 h-6 mr-2 relative">
              <Image
                src={speaker.image.url}
                alt={speaker.image.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                className="rounded-full"
              />
            </div>
          ) : (
            <div className="w-6 h-6 mr-2 rounded-full bg-gray-100" />
          )}
          <p className="text-sm">{speaker.name}</p>
        </div>
      ))}
    </div>
  );
};

const getSessionStartTimes = (schedule: types.ScheduleSection): Date[] => {
  const startTimes: Record<string, Date> = {};
  for (const track of schedule.tracks) {
    for (const session of track.sessions) {
      const startTime = getTimeString(session.startTime);
      if (!(startTime in startTimes)) {
        startTimes[startTime] = normalizeDate(session.startTime);
      }
    }
  }
  return Object.values(startTimes).sort();
};

const getIntervalsFromFirstStartTime = (startTime: Date, time: Date): number => {
  const difference = differenceInMinutes(normalizeDate(time), startTime);
  return Math.floor(difference / SCHEDULE_ROW_INCREMENT);
};

const getIntervalsForDuration = (startTime: Date, endTime: Date): number => {
  const difference = getDurationInMinutes(startTime, endTime);
  return Math.floor(difference / SCHEDULE_ROW_INCREMENT);
};

const getDurationInMinutes = (startTime: Date, endTime: Date): number => {
  return differenceInMinutes(normalizeDate(endTime), normalizeDate(startTime));
};

const getTimeString = (date: Date): string => {
  return format(date, 'H:mm aaa');
};

const normalizeDate = (date: Date): Date => {
  return new Date(`01-01-1970 ${getTimeString(date)}`);
};

export default ScheduleSection;
